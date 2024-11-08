/** @jsx jsx */
import { jsx } from 'theme-ui';
import { InlineWidget } from "react-calendly";


export default function Calendy() {
  return (
    <div >
      <InlineWidget url="https://calendly.com/gigantonline/15min" styles={{height:700}}/>
    </div>
  );
}

