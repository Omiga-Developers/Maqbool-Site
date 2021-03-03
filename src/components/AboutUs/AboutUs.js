import styled from "styled-components"

const AboutUs = () => {
    return (
        <AboutUsWrapper>
            <div className="title">
                <h2>- About Us -</h2>
            </div>
            <div className="lower">
                <div className="lower__left">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                        in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
                        feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                    </p>
                </div>
                <div className="lower__right" style={{ backgroundImage: `url(images/about/about.jpg)`, backgroundSize: 'cover' }}>
                </div>
            </div>
        </AboutUsWrapper>
    )
}

export default AboutUs

const AboutUsWrapper = styled.div `
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;

    > div.title {
        display: flex;
        justify-content: center;
    }

    > div.title > h2 {
        font-size: 2rem;
        color: seagreen;
    }

    > div.lower {
        padding-left: 2.4rem;
        padding-right: 2.4rem;
        display: flex;
    }

    > div.lower > div.lower__left {
        width: 60%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-right: 3rem;
    }

    > div.lower > div.lower__right {
        width: 40%;
    }

    div.lower__left {
        text-align: center;
    }

    @media screen and (max-width: 700px) {
        > div.lower {
            flex-direction: column;
        }

        div.lower__left, div.lower__right {
            width: 100% !important;
            padding: 0 !important; 
        }

        div.lower__left > p {
            font-size: 1rem;
        }
    }
`