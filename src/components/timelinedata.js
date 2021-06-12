import { TimelineItemContent } from "../styles";

const TimelineData = (props) => {
    return (
        <TimelineItemContent>
            <p>{props.year}</p>
            <p>{props.text}</p>
            <p>{props.image}</p>
        </TimelineItemContent>
    );
};

export default TimelineData;