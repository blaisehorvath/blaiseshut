import React from "react";
import SkillItem from "../components/SkillItem";
import MemberSocial from "../components/MemberSocial";

export const introShort = "Welcome on SWATeam site!";

export const introText = <div>
    <p>We’re a two member software development team focusing on web and embedded electronics development or Internet Of Things to
        put it simply.</p>
    <p>Coming from very different backgrounds, together we have experience in wide range of subjects. Balázs, the tech
        geek of our team studied Biology at ELTE in Budapest, and went into systems and computational biology research.
        Viktor, the other member is a physics student who switched to electrical engineering, with a lot side projects
        including FPGAs and CNC machines amongst others. One thing is true for both of us: we’ve been turned to
        programming at a very young age.</p>
    <p>For web developent our main technologies are: Node.js, React, Redux and Amazon AWS, for embedded systems we’re
        mainly using TI/ST ARM microcontrollers and RIOT os.</p>
    <p>We both believe in open technologies, our solutions are usually built on them whenever possible.</p>
    <p>As a team we are able to design a complete IOT solution from electrical design, prototyping, mechanical design,
        web development and deployment.</p>
</div>;

export const webApplicationDevelopmentText = <div>
    <p>This website is our reference website, with the use of following things:</p>
    <h4>Building:</h4>
    <ul>
        <li>Gulp</li>
        <li>Babel</li>
        <li>Browserify</li>
    </ul>
    <h4>Back-end:</h4>
    <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>AWS-SDK on the AWS infrastructure</li>
    </ul>
    <h4>Front-end</h4>
    <ul>
        <li>React.js</li>
        <li>Redux</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Sass</li>
    </ul>
    <p>For back-end in AWS we’re currently using DynamoDB and Elastic beanstalk. The move to AWS Lambda and API Gateway
        is on its way to production using the Serverless framework.</p>
</div>;

export const embeddedSystemsDesignText = <div>
    <h4>Design</h4>
    <p>The first part of an electronics system is the schematic design and PCB routing: for this we’re mainly using
        KiCAD,
        our other choices would be Eagle and Altium Designer.</p>
    <h4>Prototyping</h4>
    <p>The second part is the prototyping: we’re able to make our own double sided PCBs for rapid prototyping, and we
        also know how to solder various SMD components.</p>
    <h4>Familiar MCUs</h4>
    <p>On the microcontroller side we’re familiar with the following MCU families: MSP430, Atmega, STM32, PIC18 and
        8085/8051.</p>
    <h4>FPGA experience</h4>
    <p>Viktor also have FPGA development experience with Xilinx FPGAs using Verilog. The reference for these kind of
        jobs is an FPGA tetris with VGA output, PS2 keyboard handling and a wavetable synth.</p>
</div>;

export const iotEngineeringText = <p>
    As a team, we’re able to develop a complete IOT solution. We also know how to deploy embedded operating systems such
    like <a href="https://www.riot-os.org/">RIOT</a> and <a href="http://www.contiki-os.org/">Contiki</a> on various
    hardware. We’ve been using RIOT in our recent project, and became quite familiar
    with its networking stack, driver system and application level programming API.
</p>;

export const teamText = <div>
    <p>Located in Budapest, we’re working together as freelancers to make money and opportunities for projects we love (
        don’t get me wrong, we love web development ;) ). The thing which got us together is an interest in using
        technology
        as a tool to achieve sustainable and happy life. This mostly means making your own food using aquaponics amongst
        other things, in which we’re planning to get seriously into.</p>
    <p>Our personalities are very different, but in a way that they complement each other, allowing us to make better
        things than one of us could make alone, and we both strongly beleive that this will be the key to our future
        success.</p>
</div>;

let balazsSkills = [
    {
        key: 1,
        language: "Jacascript",
        skill: 9,
        description: "Since most of my bigger projects used this language both on back and front-end, I’m quite familiar with it."
    },
    {
        key: 2,
        language: "Python",
        skill: 9,
        description: "I’ve used it for various tasks: scripting, database management and for writing systems biology simulations."
    },
    {
        key:3,
        language: "C",
        skill: 6,
        description: "I’ve learned this language trough embedded programming, since I know C++ the syntax was relatively straightforward, I just need to get used to the language a little bit."
    },
    {
        key: 4,
        language: "PHP",
        skill: 7,
        description: "Its been a long time I had to use it, but I had a good knowledge back then."
    },
    {
        key: 5,
        language: "Databases",
        skill: 8,
        description: "I had to deal with a lot of database programming while working on systems biology, from  databases I’m familiar with MySQL, SQLite from noSQL I’ve used mongoDB and a littled bit of DynamoDB."
    },
    {
        key:6,
        language: "Linux",
        skill: 8,
        description: "I’ve been using linux for about 10 years now, I know how to automate tasks, and use it efficiently for my work."
    }
];

let balazsSocial = {uwUrl:"https://www.upwork.com/freelancers/~01cb2a4ccd99032bfb", lnUrl:"https://www.linkedin.com/in/bal%C3%A1zs-horv%C3%A1th-493b5b105?trk=hp-identity-name", gitUrl:"https://github.com/blaisehorvath"};

export const balazsText = <div>
    <h4>Education and Experiences</h4>
    <p>I’ve began programming at a young age, and went to a high school which was famous for its programming classes.
        That was the place where I learned the fundamentals of programming, mostly trough Delphi and C#. After high
        school I started a Bsc in Programming at ELTE in Hungary, but after a year I’ve become interested in
        bioinformatics, and I switched to a Biology program at the same university. While I was doing my Bsc and Msc
        programmes I’ve always had a few side projects in C++/Qt, Perl. I wrote my master thesis in systems biology
        where I used python for creating databases, building algorithms for analysing molecular biology networks and
        scientific data analysis.
    </p>
    <h4>Experiences</h4>
    <p>While I was doing my Bsc, I got my first job as a full-stack web developer. I made my first website using PHP, JS
        and CSS for a faculty at ELTE. During Msc I joined a British-Hungarian multinational systems biology research
        group called NetBiol. At the NetBiol I learned how to work on a bigger project with a team of coders. Working
        there I’ve also learned how to use version control systems like Git with Github. As a member of a team there I
        worked on a project that was using Node.js and Python. Working on that project I got familiar with a lot of
        frameworks and technologies like Gulp, React, MongoDB, SQLite and many others.
    </p>
    <h4>Embedded systems and IOT experiences</h4>
    <p>While working at Netbiol Viktor got me into embedded programming trough an IOT project. It was quite intimidating
        at first, but after a week or so we were able to split the work quite efficiently, and it only got better as
        time passed. The hardware and software knowledge that I’ve acquired in high school helped a lot, but needed some
        refreshing. We’ve talked a lot about how we want to live, and I’ve realized that embedded programming knowledge
        is a must have if you want to work on automatizations in your everyday life, and also comes handy if you want to
        develop agricultural solutions. Because of this I’ve became really interested in embedded systems. I’m basically
        a web developer who got interested in hardware, Viktor is the exact opposite. Because of this we’re able to work
        very efficiently on a full scale IOT project.</p>
    <h4>Skills</h4>
    {balazsSkills.map(skill => <SkillItem {...skill}/>)}
    <MemberSocial {...balazsSocial} />
</div>;


let viktorSkills = [
    {
        key: 1,
        language: "C",
        skill: 8,
        description: "I’ve been using C since I was 13 years old. The reason my I give only 8/10 to myself is because I think that I need a little bit more experience in bigger C projects."
    },
    {
        key: 2,
        language: "Javascript",
        skill: 8,
        description: "I’ve only jumped into JS to learn Node.js, but as the result of the initial failures, I’ve put a lot of energy into properly learning the language. There is a lot to be learned, but I’m confident in my current knowledge."
    },
    {
        key: 3,
        language: "Node.js",
        skill: 8,
        description: "I feel comfortable on the back-end with authentication, databases and React/Redux on the front-end."
    },
    {
        key: 4,
        language: "Python",
        skill: 5,
        description: "I’ve used Python for learning AI and doing smaller tasks in it. Honestly, this language is very easy to use, I’ve never been stuck with it, but I think this only means that I don’t know enough :)."
    },
    {
        key: 5,
        language: "Amazon AWS",
        skill: 5,
        description: "The infrastructure is huge and I’m familiar with most of it on the surface, but only used the parts which are needed for hosting this blog. The Lambda/API Gateway combination amazes me, I’m looking forward learn it more and more. The things I think I need to learn are Swagger for API Gateway deployment automatization, and CloudFormation."
    },
    {
        key: 6,
        language: "Linux",
        skill: 6,
        description: " I’m not really the type who likes to tinker with things without a purpose, which could come handy when you’re learning Linux. I use it everyday for work, but I wouldn’t consider myself a poweruser. FPGAs and Verilog: 9/10: Its a long time I’ve touched an FPGA but the logic of it felt very natural to me right from the start. The Tetris project helped me in understanding FPGAs a lot, sadly I don’t have any projects involving this kind of technology right now."
    },
    {
        key: 7,
        language: "PCB design",
        skill: 8,
        description: "I’m able to design a PCB with various components, so it can be manufactured anywhere. I would love to learn more about high speed signaling and designing for EMC, but I simply didn’t had a project which involved these kinds of things."
    },
    {
        key: 8,
        language: "Mechanical design",
        skill: 6,
        description: "I’ve learned SolidWorks/SolidCAM for designing my CNC and generating G code for it. I can build somewhat complex things in it, but I’m far away from an experienced mechanical engineer."
    }
];

let viktorSocial = {uwUrl : "https://www.upwork.com/o/profiles/users/_~01b56a4e45e83c5751/" , lnUrl : "https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0", gitUrl : "https://github.com/ViktorVaczi90"}

export const viktorText =
    <div>
        <h4>Education and background</h4>
        <p>I started studying physics at Budapest Technology and Economics, but as I changed I turned to electrical
            engineering and got a degree in that. The main reason for the change is I started to feel that phyiscs
            doesn’t get me any closer to the goals which became clearer and clearer as I matured. Namely, I really want to work on things which brings the barrier of a sustainable lifestyle more achiavable to an average person down, a good parallel would be the Arduino, which made it easier for anybody to enter the realm of embedded electronics.</p>
        <h4>Interests</h4>
        <p>The things I’m interested in are aligned with this goal, namely: web programming with Node.js, mechanical
            design and prototyping with SolidWorks ( I haven’t found a good open alternative ), and electrical design
            with KiCAD.
            I’ve been doing freelancing jobs for a year and a half now, and learned a lot of things about myself and
            about working directly for someone. I’m using <a href="https://www.upwork.com/o/profiles/users/_~01b56a4e45e83c5751/</p>">UpWork</a> for freelancing work.</p>
        <p>As a former phyics student I have a strong mathemathical and physics background. The field which I would
            love to get into is AI or deep neural networks for image recognition and autonomous robotics more
            specifically.</p>
        <p>I can also enjoy life without bits and bytes :) I love to play foosball on a competetive level, and I also
            have a passion for guitar playing and music in general. I love to move, or just excersize.</p>
        <h4>Skills</h4>
        {viktorSkills.map( skill => <SkillItem {...skill}/>)}
        <MemberSocial {... viktorSocial}/>
    </div>;