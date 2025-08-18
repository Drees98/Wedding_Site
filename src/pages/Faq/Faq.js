import "./Faq.css"
import Collapse from "../../utils/Collapse"

function Faq() {

    return(
        <div>
            <Collapse label="What time is the wedding?"><p>Please arrive around 2:30. The ceremony will begin at 3:00 pm and reception will follow.</p></Collapse>
            <Collapse label="Is the event child friendly?"><p>Children are welcome as long as they can be kept quiet during the ceremony.</p></Collapse>
            <Collapse label="When is the RSVP deadline?"><p>The last day you will be able to submit your RSVP will be March 16th, 2026.</p></Collapse>
            <Collapse label="Who can I bring as a plus one?"><p>Please feel free to bring any children and your partner.</p></Collapse>
            <Collapse label="What is the dress code?"><p>The bride will be the only one wearing white. Our wedding party is in emerald green and light yellow.</p></Collapse>
            <Collapse label="Where can I park?"></Collapse>
            <Collapse label="Can I take pictures?"><p>Please refrain from taking pictures during the ceremony. We will be happy to take photos with you during the reception</p></Collapse>
            <Collapse label="What if I need a hotel room?"><p>We have booked a block of hotel rooms. Please contact us at <a href="mailto:david.jasmine.rees@gmail.com">david.jasmine.rees@gmail.com</a> at least a month before the wedding and we will help you with the booking process.</p></Collapse>
            <Collapse label="What is the drink policy?"><p>Each table will have a bottle of red wine and a bottle of white wine. Each adult will recieve 2 drink tickets </p></Collapse>
        </div>
    )
}
export default Faq