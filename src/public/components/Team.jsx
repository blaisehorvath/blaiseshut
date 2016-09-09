import React from 'react';
import TeamMemberCollapse from '../components/TeamMemberCollapse';

/**
 * This constant holds the configurations for Team section
 * @const
 * @type {Array}
 */
const teamMembers = [
    {
        targetCollapse: "teamCollapse",
        isExpanded: false,
        caption: "Team",
        title: "Team",
        children: <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi dolorum omnis praesentium ullam! Accusamus alias aliquam atque error expedita facilis fugit, hic inventore ipsam magni maxime nemo neque omnis placeat quo sequi ullam velit. Atque autem beatae cupiditate error ipsam ipsum itaque maiores porro sapiente veritatis! At illo in qui repellat tempore. Ad dignissimos dolorem eveniet, facere harum, illum ipsum labore nemo neque obcaecati perferendis perspiciatis praesentium provident quae quisquam rem sapiente similique soluta ut voluptatibus. Accusantium aperiam commodi consequuntur, debitis, dolorum et modi nemo omnis perspiciatis praesentium quibusdam recusandae ullam velit. At beatae dicta dolores esse eum fugiat laboriosam possimus velit voluptatibus! Aut cum earum ipsum iure magni non officiis quidem voluptas voluptatibus!</div>
    },
    {
        targetCollapse: "member1",
        isExpanded: false,
        caption: "member1",
        title: "Member 1",
        children: <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum ducimus enim in ipsum labore libero magnam modi optio, perferendis porro, quaerat quasi quibusdam recusandae similique, unde voluptatum? Asperiores consectetur consequatur culpa doloribus esse eum molestias nemo quia sit vero? Aliquam atque culpa cumque distinctio dolore dolorem earum et eveniet excepturi exercitationem fugiat fugit hic inventore ipsam labore magnam modi, nam nemo nostrum officia omnis placeat possimus praesentium quas quibusdam reiciendis repellat saepe sint soluta suscipit vero vitae voluptatibus voluptatum. Illum, inventore neque officia possimus quaerat soluta?</div>
    },
    {
        targetCollapse: "member2",
        isExpanded: false,
        caption: "member2",
        title: "Member 2",
        children: <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut beatae commodi consequuntur cum facilis officia reiciendis, sit! Ab alias animi autem, cupiditate dolore doloremque error est harum inventore ipsa laboriosam laudantium libero maxime minus molestias nemo nihil nisi nobis non obcaecati odio odit officiis qui quisquam recusandae repellat similique sint ut vero voluptatibus. A ab ad aliquid aperiam, architecto aspernatur autem dignissimos distinctio dolores enim et ipsa ipsam, maxime necessitatibus numquam obcaecati quod reiciendis saepe ullam unde. Aliquid est ex obcaecati quasi, sit totam! Aperiam culpa dolores expedita inventore laborum quis suscipit, tenetur? Consequuntur cupiditate ex id repellat tempora!</div>
    }
];

/**
 * This stateless functional React component returns the Team section of the About page.
 * @returns {XML}
 * @constructor
 */
const Team = () => {
    return (
        <section id="team">
            <div className="container">
                <h1 className="headerTitle">Team</h1>
                <TeamMemberCollapse teamMembers={teamMembers}/>
            </div>
        </section>
    );
};

export default Team;
