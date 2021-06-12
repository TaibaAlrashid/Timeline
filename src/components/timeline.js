import events from "../events"
import TimelineData from "./timelinedata";
import { TimelineContainer, TimelineItem } from "../styles"

const Timeline = () => {
    const eventsList = events.map((event) => (
            <TimelineData
            year={event.year}
            text={event.text}
            image={event.image}
            id={event.id}
            />
));
return (
    <TimelineContainer>
    <TimelineItem>
    {eventsList}
    </TimelineItem>
    </TimelineContainer>
)
};

export default Timeline;