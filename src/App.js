import React, { forwardRef } from 'react';
import { Row, Col, TimePicker } from 'antd';
import moment from 'moment';
import { TimePickerProps } from 'antd/es/time-picker';

interface IProps extends TimePickerProps {
  prefixCls?: string;
  value?: any;
  onChange?: any;
}



const App: React.FC<IProps> = (props, ref) => {
//   const {
//     prefixCls,
//     className,
//     style,
//     onChange,
//     value,
//     disabled,
//     ...rest
//   } = props;

//   const [startTime, setStartTime] = React.useState(value.start || moment());
//   const [endTime, setEndTime] = React.useState(value.end || moment());
  const [startTime, setStartTime] = React.useState(moment());
  const [endTime, setEndTime] = React.useState( moment());

  /*定义时间数组*/
  const Hours = Array.from(Array(24), (v, k) => k);
  const Minutes = Array.from(Array(60), (v, k) => k);
  const Seconds = Array.from(Array(60), (v, k) => k);

  const triggerChange = changedValue => {
    // if (onChange) {
    //   onChange(
    //     Object.assign({}, { start: startTime, end: endTime }, changedValue)
    //   );
    // }
  };

  

//    /*结束时间控制-hour*/
//   const disEndHouse = () => {
//     if (startTime) {
//       let h = startTime.hour();
//       return Hours.slice(0, h);
//     }
//     return [];
//   };

//   /*结束时间控制-minute）*/
//   const disEndMinute = h => {
//     if (startTime) {
//       if (h > startTime.hour()) return [];
//       let m = startTime.minute();
//       return Minutes.slice(0, m);
//     }
//     return [];
//   };

//   /*结束时间控制-second*/
//   const disEndSeconds = (h, m) => {
//     if (startTime) {
//       if (h > startTime.hour()) return [];
//       if (m > startTime.minute()) return [];
//       let s = startTime.second();
//       return Seconds.slice(0, s);
//     }
//     return [];
//   };

//   /*开始时间控制-hour*/
//   const disStartHouse = () => {
//     if (endTime) {
//       let h = endTime.hour();
//       return Hours.slice(h, Hours.length - 1);
//     }
//     return [];
//   };

  /*开始时间控制-minute*/
//   const disStartMinute = h => {
//     if (endTime) {
//       if (h < endTime.hour()) return [];
//       let m = endTime.minute();
//       return Minutes.slice(m, Minutes.length - 1);
//     }
//     return [];
//   };

//   /*开始时间控制-second*/
//   const disStartSeconds = (h, m) => {
//     if (endTime) {
//       if (h < endTime.hour()) return [];
//       if (m < endTime.minute()) return [];
//       let s = endTime.second();
//       return Seconds.slice(s, Seconds.length - 1);
//     }
//     return [];
//   };

  return (
    <Row >
        <TimePicker
          allowClear={false}
          inputReadOnly={true}
          onChange={value => {
            setStartTime(value);
            // triggerChange({ start: value });
          }}
          value={moment('00:00', 'HH:mm')}
          style={{margin:'auto'}}
            value={moment('00:00', 'HH:mm')}
        //   disabledHours={disStartHouse}
        //   disabledMinutes={disStartMinute}
        //   disabledSeconds={disStartSeconds}
        />
      {/* <Col span={12}>
        <TimePicker
        //   allowClear={false}
        //   disabled={disabled}
        //   onChange={value => {
        //     setEndTime(value);
        //     triggerChange({ end: value });
        //   }}
        //   value={value.end || moment('23:59:59', 'HH:mm:ss')}
        // value={moment('23:59:59', 'HH:mm:ss')}
        //   disabledHours={disEndHouse}
        //   disabledMinutes={disEndMinute}
        //   disabledSeconds={disEndSeconds}
        />
      </Col> */}
    </Row>
  );
};
export default App;

// export default forwardRef(TimePickerRange);