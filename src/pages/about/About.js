import "./About.css"
import proposal from "../../images/proposal.jpeg"
import Collapse from "../../utils/Collapse"

function About() {

    return(
        <div>
            <Collapse label="Our First Date"><p>We met for the first time at the Frozen Paddle ice cream shop on September 11<sup>th</sup>, 2021. We had an amazing time together and spent over 4 hours just chatting.</p></Collapse>
            <Collapse label="The Proposal">
                <table>
                    <tr>
                        <td className="Text-with-img"><p>Jasmine had made some amazing cookies to decorate near Christmas, and David bought some matching pajamas to wear while doing so. While decorating, David sneakily added some words to the cookies, before asking Jasmine to review his work. The cookies spelled out "JJ Will You Marry Me". Overjoyed, Jasmine responed with a YES!. </p></td>
                        <td><img className="Proposal-img" alt='proposal' src={String(proposal)}/></td>
                    </tr> 
                </table>
            </Collapse>
        </div>
    )
}
export default About