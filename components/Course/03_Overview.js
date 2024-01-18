const Overview = () => {
    return (
        <div className="mx-3 md:mx-56 mt-10 space-y-6">
            <div className="space-y-4">
                <h1 className="font-bold text-2xl">
                    About this course
                </h1>
                <p>
                    The modern JavaScript course for everyone! Master JavaScript
                    with projects.
                </p>
            </div>
            <hr
                className="border-t border-gray-500"
            />
            <div className="flex space-x-3 md:space-x-20">
                <span>By the numbers</span>
                <ul>
                    <li>Skill level: All Levels</li>
                    <li>Students: 869440</li>
                    <li>Languages: English</li>
                    <li>Captions: Yes</li>
                </ul>
                <ul>
                    <li>Lectures: 320</li>
                    <li>Video: 68.5 total hours</li>
                </ul>
            </div>
            <hr
                className="border-t border-gray-500"
            />
            <div className="flex space-x-5 md:space-x-20">
                <span>Certificates</span>
                <span className="flex flex-col space-y-4">
                    <p>Get CodeJs certificate by completing entire course</p>
                    <button className="border-2 border-white py-2">
                        CodeJs Certificate
                    </button>
                </span>
            </div>
            <hr
                className="border-t border-gray-500"
            />
            <div className="flex space-x-5 md:space-x-20">
                <span>Description</span>
                <span className="flex flex-col space-y-4">
                    <div className="space-y-4">
                        <h1 className="font-bold">
                            The #1 bestselling JavaScript course
                        </h1>
                        <p>
                            <i>
                                "Really, really well made course. Super in-depth,
                                with great challenges and projects that will solidify
                                your Javascript understanding. I found the lectures
                                were paced perfectly -- Jonas doesn't skip over
                                anything that might be useful to a JS developer"
                                — Vishal Sharma (Senior Web developer in Natomi)

                            </i>
                        </p>
                        <p>
                            JavaScript is the most popular programming language
                            in the world. It powers the entire modern web.
                            It provides millions of high-paying
                            jobs all over the world.
                            <br />
                            That's why you want to learn JavaScript too.
                            And you came to the right place!
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="font-bold">
                            Why is this the right JavaScript course for you?
                        </h1>
                        <p>
                            <i>
                                This is the most complete and in-depth JavaScript
                                course on Udemy (and maybe the entire internet!).
                                It's an all-in-one package that will take you from
                                the very fundamentals of JavaScript, all the way
                                to building modern and complex applications.
                            </i>
                        </p>
                        <p>
                            You will learn modern JavaScript from the very
                            beginning, step-by-step. I will guide you through
                            <b>practical and fun code examples, important theory</b>
                            about how JavaScript works behind the scenes,
                            and <b>beautiful and complete projects</b>.
                        </p>
                        <p>
                            You will become ready to continue learning
                            advanced <b>front-end frameworks</b> like React,
                            Vue, Angular, or Svelte.
                        </p>
                        <p>
                            You will also learn how to think like a developer,
                            how to plan application features, how to architect
                            your code, how to debug code, and a lot of other
                            real-world skills that you will need in your
                            developer job.
                        </p>
                    </div>
                </span>
            </div>
            <hr
                className="border-t border-gray-500"
            />
            <div className="flex space-x-5 md:space-x-20">
                <span>Instructor</span>
                <span className="flex flex-col space-y-4">
                    <div className="flex space-x-4">
                        <img
                            className="w-12 h-12 rounded-full"
                            src="/images/courses/course/instructor_01.JPG"
                        />
                        <div>
                            <h1 className="font-bold text-xl">Narendra Kumar</h1>
                            <span>Web Developer, Designer, and Teacher</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p>
                            Hi, I'm Jonas! I'm one of Udemy's Top
                            Instructors and all my premium courses
                            have earned the best-selling status for
                            outstanding performance and student
                            satisfaction.
                        </p>
                        <p>
                            I'm a full-stack web developer and
                            designer with a passion for building
                            beautiful web interfaces from scratch.
                            I've been building websites and apps
                            since 2010 and also have a Master's
                            degree in Engineering.
                        </p>
                        <p>
                            I discovered my passion for teaching
                            and helping others by sharing everything
                            I knew during college. This passion led
                            me to Udemy in 2015, where I now have the
                            privilege of training <b>1,500,000+</b>
                            learners in the field of web development.
                        </p>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Overview;
