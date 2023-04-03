import React, {useContext} from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction"; 
import moment from "moment";
import { SchedulerContext } from "../../contexts";
import "./index.css";


const Calendar = () => {

  const { schedulerEvents, setSchedulerEvents, schedulerResources } = useContext(SchedulerContext);

  const handleDateClick = (event) => {
    const title = prompt("Enter a title for the event:");

    if (title) {
      const newEvent = {
        resourceId: event.resource._resource.id,
        title: title,
        start: moment(event.date).format('YYYY-MM-DD'),
        end: moment(event.date).format('YYYY-MM-DD'),
      };

      setSchedulerEvents([...schedulerEvents, newEvent]);
    }
  };

  return (
    <div className="calendar">
      <FullCalendar
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        plugins={[resourceTimelinePlugin, interactionPlugin]}
        initialView="resourceTimelineWeek"
        slotDuration="24:00"
        dateClick={handleDateClick}
        hiddenDays={[0, 6]}
        editable={true}
        selectable={true}
        selectMirror={true}
        events={schedulerEvents}
        resourceAreaColumns={[
          {
            field: "name",
            headerContent: "Name",
          },
        ]}
        resources={schedulerResources}
      />
    </div>
  );
};

export default Calendar;