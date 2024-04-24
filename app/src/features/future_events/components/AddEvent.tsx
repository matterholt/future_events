export const AddEventForm = () => {
  return (
    <div id="addEvent_form_container">
    <h2>Submit new event</h2>
      <form>
        <label for="eventTitle">Event Title:</label><br/>
        <input type="text" id="eventTitle" name="eventTitle"/><br/>

        <label for="eventDate">Event Date:</label><br/>
        <input type="date" id="eventDate" name="eventDate"/><br/>

        <input type="submit" value="Submit"/>
        
      <button
        hx-get="/future-events"
        hx-target="click"
        hx-target="#addEvent_form_container"
        hx-swap="outerHTML"
      >Cancel</button>
      </form>
    </div>
  );
};

export const AddEvent = () => {
  return (
    <div id="addEvent_form_container">
      <button
        hx-get="/future-events/eventForm"
        hx-target="click"
        hx-target="#addEvent_form_container"
        hx-swap="outerHTML"
      >
        Add New Event
      </button>
    </div>
  );
};
