import { useMemo } from "react";
import InfoGrid, { IInfoGridProps } from "@molecules/InfoGrid";
import { feesSetting, ICreateLaunchpad, ICreateLaunchpadFormData } from "..";
import { title } from "case";
import moment from "moment";
import { supportNetwork } from "@constants/network";
import useAuth from "@hooks/useAuth";
import HoverImage from "@components/Common/HoverImage";
import { TIME_FORMAT } from "@constants/timeFormats";

interface IProps extends ICreateLaunchpad {
  bannerImage: string;
}

const Step4: React.FC<IProps> = (props) => {
  const { formik, bannerImage } = props;
  const {
    connect,
    isLoggedIn,
    account,
    loading: connecting,
    balance_formatted,
    chainId,
  } = useAuth();

  const { values: data, handleSubmit } = formik;

  const getKeyValue =
    <U extends keyof T, T extends object>(key: U) =>
    (obj: T): string =>
      String(obj[key]);

  const launchPadDetails = useMemo<IInfoGridProps["data"]>(() => {
    const map = Object.keys(data)
      ?.filter(
        (k: any) =>
          getKeyValue<keyof ICreateLaunchpadFormData, ICreateLaunchpadFormData>(
            k
          )(data) !== ""
      )
      ?.filter((key) => !["isvesting", "step"].includes(key))
      ?.map((key: any) => {
        const value = getKeyValue<
          keyof ICreateLaunchpadFormData,
          ICreateLaunchpadFormData
        >(key)(data);
        if (["tokenAddress"].includes(key)) {
          return {
            title: title(key),
            value: value,
            type: "address",
          };
        }
        if (["liquidityLockupDays"].includes(key)) {
          return {
            title: "Liquidity Unlock Date (UTC)",
            value: `${moment(data.endTime)
              .utc()
              .add(value, "days")
              .format(TIME_FORMAT)}`,
          };
        }
        if (["CycleReleasePercent"].includes(key)) {
          return {
            title: "Cycle Release Percent",
            value: `${value}%`,
          };
        }
        if (["TGEPercentage"].includes(key)) {
          return {
            title: "TGE Percentage",
            value: `${value}%`,
          };
        }
        if (["liquidity"].includes(key)) {
          return {
            title: title(key),
            value: `${value}%`,
          };
        }
        if (["CycleTime"].includes(key)) {
          return {
            title: "Cycle Time (Days)",
            value: `${value}`,
          };
        }
        if (
          [
            "startTime",
            "endTime",
            "TGEDate",
            "tier1StartTime",
            "publicStartTime",
            "tier1EndTime",
            "tier2StartTime",
            "tier2EndTime",
          ].includes(key)
        ) {
          return {
            title: title(key) + " " + "(UTC)",
            value: moment(value).utc().format(TIME_FORMAT),
          };
        }
        if (
          ["softcap", "hardcap", "maximumBuy", "minimumBuy"].includes(key) &&
          chainId
        ) {
          return {
            title: title(key),
            value: value + " " + supportNetwork[chainId]?.symbol,
          };
        }
        if (["listingRate"].includes(key) && chainId) {
          return {
            title: title(key),
            value: `1 ${supportNetwork[chainId]?.symbol} = ${value} ${formik.values.symbol}`,
          };
        }
        if (
          [
            "website",
            "facebook",
            "twitter",
            "instagram",
            "github",
            "telegram",
            "discord",
            "reddit",
          ].includes(key)
        ) {
          return {
            title: title(key),
            type: "socials",
            value: value,
          };
        }
        return {
          title: title(key),
          fullWidth: ["description"].includes(key.toLowerCase()),
          value: String(value),
        };
      });

    const fees =
      feesSetting[
        data.feeOptions ===
        `5% ${supportNetwork[chainId || "default"].symbol} raised only`
          ? "1"
          : "2"
      ].token;
    const listingPercent =
      data.listingOptions === "Auto"
        ? parseFloat(data.listingRate) * parseFloat(data.hardcap)
        : 0;
    const percent =
      (parseFloat(data.presaleRate) *
        parseFloat(data.hardcap) *
        parseFloat(data.liquidity)) /
      100;
    const feesValue =
      (parseFloat(data.listingRate) * parseFloat(data.hardcap) * fees) / 100;

    const requiredTokens = percent + listingPercent + feesValue;
    map.push({
      title: "Required Tokens",
      value: `${requiredTokens.toString()} ${data.symbol}`,
    });
    return map || [];
  }, [data]);

  console.log("launchPadDetails", data);

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-xl font-semibold">Details</p>
      <InfoGrid data={launchPadDetails} />
      <div className="flex justify-center mt-4">
        <HoverImage
          type="staticImageWithHover"
          borderRadius="rounded-full"
          classTag="rounded-[120px] w-[318px] h-[318px] object-cover"
          src={bannerImage}
          title={formik.values.title}
          startTime={formik.values.startTime}
          endTime={
            formik.values.tier2EndTime
              ? formik.values.tier2EndTime
              : formik.values.endTime
          }
        />
      </div>
    </form>
  );
};

export default Step4;
