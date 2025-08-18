import React, {useState} from 'react';
import "./RSVP.css"
function RSVP() {
    const [additionalGuests, setAdditionalGuests] = useState(false)  
    function changeCount(val) {
        setAdditionalGuests(val > 1)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        const data = event.target
        var subject = encodeURIComponent("We will be there")
        var guests = encodeURIComponent("List of guests: " + data.name.value + " " + (additionalGuests ? data.additionalNames.value : "") + "\n\n")
        var numberOfAdults = encodeURIComponent("Guests of legal drinking age: " + data.adultCount.value + "\n\n")
        var accomodations = encodeURIComponent(!data.accomodations.value ? "": "Accomodations we will need include: " + data.accomodations.value + "\n\n")
        var roomNeeded = encodeURIComponent(data.needRoom.checked ? "We will need to book a room\n\n" : "")
        var comment = encodeURIComponent(data.additionalComments.value)
        var body = guests + numberOfAdults + accomodations + roomNeeded + comment
        window.location.href = "mailto:david.jasmine.rees@gmail.com?subject=" + subject + "&body=" + body
    }

    return(
        <div id="RSVP" className="tabContent RSVP hidden-tab">
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <label>Name: <input type="text" name="name" required/></label>
                <label>Total number guests: <input type="number" name="plus1count" min="1" defaultValue={1} onChange={(e) => changeCount(Number(e.target.value))}/></label>
                <label className={additionalGuests ? 'show-content': 'hide-content'}>Names of additional guests (first and last for seating): <textarea name="additionalNames"/></label>
                <label>Number of adults in the party (19+): <input type="number" name="adultCount" min="0" defaultValue={0}/></label>
                <label>Dietary Restrictions/Physical Accomodations: <textarea name="accomodations"/></label>
                <label>Do you need a hotel room? <input className='checkbox-style' type="checkbox" name="needRoom"/></label>
                <label>Additional comments: <textarea name="additionalComments"/></label>
                <input className='RSVP-button' type="submit" value="submit"/>
            </form>
            <p className='RSVP-info'>*Please hit send on the auto generated email for us to receive your RSVP</p>
        </div>
    )
}

export default RSVP;