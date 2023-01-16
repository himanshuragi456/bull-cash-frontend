import React from "react";
import DatePicker from "react-datepicker";

interface IDateTimePicker {
  label?: string;
  className?: string;
  error?: string | boolean;
  value: string;
  onChange: any;
  name: string;
  placeholder?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const DateTimePicker: React.FC<IDateTimePicker> = ({
  className,
  label,
  onChange,
  value,
  error,
  name,
  placeholder,
  onBlur,
}) => {
  function utcToLocalDate(date: any) {
    if (!date) {
      return date;
    }
    date = new Date(date);
    date = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );
    return date;
  }

  function localToUTCDate(date: any) {
    if (!date) {
      return date;
    }
    date = new Date(date);
    date = new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      )
    );
    return date;
  }

  return (
    <div className={`w-full ${className}`}>
      {/* {label && (
        <label
          htmlFor={name}
          className={`block capitalize text-base font-semibold text-[#64748B] mb-3`}>
          {label}
        </label>
      )} */}
      <DatePicker
        id={name}
        className="placeholder:text-white text-white text-base font-normal bg-secondary-dark border border-dull-green rounded-lg px-4 py-3  block w-full outline-none"
        onBlur={onBlur}
        openToDate={utcToLocalDate(new Date())}
        name={name}
        minDate={utcToLocalDate(new Date())}
        placeholderText={placeholder}
        selected={utcToLocalDate(value)}
        onChange={(date: any) => onChange(localToUTCDate(date))}
        showTimeSelect
        timeIntervals={30}
        timeFormat="hh:mm a"
        dateFormat="dd/MM/yyyy hh:mm a"
      />
      {error && (
        <p className="text-xs text-red-text capitalize font-medium leading-5">
          {error}
        </p>
      )}
    </div>
  );
};

export default DateTimePicker;
