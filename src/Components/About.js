import React from 'react';
import BBblockVerySmall from "./BBblockVerySmall";

function About(props) {
    return (
        <div className="innerAbout">
            <h2>About Me:</h2>
            <div className="col">
                <div className="smallHolder2">I'm am Natural Born Questioner From Vilnius, Lithuania! Since Childhood I Had Interests In Natural Science. </div>
                <div className="t3Holder">
                <div className="smallHolder2">I Have Studied </div>


                    <div className="smallHolder"><BBblockVerySmall letter="Ge" number="32" mass="15.999" name="Germanium"/></div>
                    <div className="smallHolder2">ology In Vilnius University, And Was Working As Geologist For 15 Years</div>
                </div>


                <div className="smallHolder2"> After Graduation.
                Studies And Work In This Speciality Gave Me Ability To Implement Important Characteristics, Like Logical Thinking,
                Science Based Understanding, Criticism, Focusing On Result etc. As Geologist I'm Familiar With Many Skills In Lots Of Fields:
                2D Graphics, 3D Graphics, Writing Reports, Physics, Chemistry, Biology, Paleontology, Ecology,
                Mathematics, Statistics, Electronics, Electricity, Data, Computer Literacy In Advanced Level.
                Also Few Years I Was Working In Entertainment As Butaphorist For Movies and Theater, Which Revealed My Artistic Part.
                <br/><br/>
                Last Year I Decided To Start Programming Carrier And Participated In "Code Academy"'s Intense JavaScript Courses For 7 Months.
                Contrary To Popular Believe, That Anybody Can Be</div>
                <div className="t3Holder">
                    <div className="smallHolder2"> A Progr</div>
                    <div className="smallHolder"><BBblockVerySmall letter="Am" number="95" mass="15.999" name="Americium"/></div>
                    <div className="smallHolder2">mer, I Think That a Good Programmer Has To Have A Special Set Of </div>
                </div>
                <div className="smallHolder2">
                    Characteristics, And I Believe I Am Very Fit To This Field.
                <br/><br/>
                Apart Job Related Activities I Also have Few More Interests And Hobbies, Most Of Them Related To Nature: Aquariums, Dogs, Fishing, Kayaking,
                Ecology, Woodworking, </div>
                <div className="t3Holder">
                    <div className="smallHolder2">Fo</div>
                    <div className="smallHolder"><BBblockVerySmall letter="Os" number="76" mass="15.999" name="Osmium"/></div>
                    <div className="smallHolder2">ball. I like Alternative Music: Grunge,
                Punk, Rock, Metal!</div></div>
            </div>
        </div>
    );
}

export default About;