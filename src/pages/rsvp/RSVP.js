import React, {useState} from 'react';
import "./RSVP.css"
function RSVP() {
    const [additionalGuests, setAdditionalGuests] = useState(false)  
    function changeCount(val) {
        setAdditionalGuests(val > 1)
    }

    const [canCome, setCanCome] = useState(true)
    const changeCanCome = () => {
        setCanCome(!canCome)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        const data = event.target
        var subject = ""
        var body = ""
        var guests = ""
        var numberOfAdults = encodeURIComponent("Guests of legal drinking age: " + data.adultCount.value + "\n\n")
        var accomodations = encodeURIComponent(!data.accomodations.value ? "": "Accommodations we will need include: " + data.accomodations.value + "\n\n")
        var roomNeeded = encodeURIComponent(data.needRoom.checked ? "We will need to book a room\n\n" : "")
        var comment = encodeURIComponent(data.additionalComments.value)
        if(canCome)
        {
            subject = encodeURIComponent("We will be there")
            guests = encodeURIComponent("List of guests: " + data.name.value + " " + (additionalGuests ? data.additionalNames.value : "") + "\n\n")
            body = guests + numberOfAdults + accomodations + roomNeeded + comment
        }
        else{
            subject = encodeURIComponent("We will not be there")
            guests = encodeURIComponent("Name of party: "  + data.name.value + "\n\n")
            body = guests + encodeURIComponent("Sorry, but we will not be able to make it\n\n")  + comment
        }
        window.location.href = "mailto:david.jasmine.rees@gmail.com?subject=" + subject + "&body=" + body
    }

    return(
        <div id="RSVP" className="tabContent RSVP hidden-tab">
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <label><span className='RSVP-label-text'>Will you be joining us? </span><input className='checkbox-style' type="checkbox" name="canComeRoom" defaultChecked={true} onClick={changeCanCome}/></label>
                <label><span className='RSVP-label-text'>Name: </span><input type="text" name="name" required/></label>
                <div className={canCome ? 'show-content': 'hide-content'}>
                    <label><span className='RSVP-label-text'>Total number guests: </span><input className='RSVP-numfield' type="number" name="plus1count" min="1" defaultValue={1} onChange={(e) => changeCount(Number(e.target.value))}/></label>
                    <label className={additionalGuests ? 'show-content': 'hide-content'}><span className='RSVP-label-text'>Names of additional guests<br className='RSVP-mobile-break'/> (first and last for seating): </span><textarea name="additionalNames"/></label>
                    <label><span className='RSVP-label-text'>Number of adults in the party (19+): </span><input className='RSVP-numfield' type="number" name="adultCount" min="0" defaultValue={0}/></label>
                    <label><span className='RSVP-label-text'>Dietary Restrictions/Physical Accommodations: </span><textarea name="accomodations"/></label>
                    <label><span className='RSVP-label-text'>Do you need a hotel room? </span><input className='checkbox-style' type="checkbox" name="needRoom"/></label>
                </div>
                <label><span className='RSVP-label-text'>Additional comments: </span><textarea name="additionalComments"/></label>
                <input className='RSVP-button' type="submit" value="submit"/>
            </form>
            <p className='RSVP-info'>*Please hit send on the auto generated email for us to receive your RSVP</p>
        </div>
    )
}

export default RSVP;