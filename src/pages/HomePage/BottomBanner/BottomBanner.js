import styled from "styled-components";
import BottomBannerItem from "./BottomBannerItem";

function BottomBanner() {
	return (
		<BottomBannerWrapper>
            <BottomBannerItem 
                title="Go For"
                paragraph="&nbsp;&nbsp; a Tour"
                button="View"
                leftImage="images/bottom/banner.jpg"
                leftWidth="60%"
                padding="2rem 0 1rem 2rem"
                rightWidth="40%"
                rightImage="images/bottom/right.jpg"
            />
		</BottomBannerWrapper>
	);
}

export default BottomBanner;

const BottomBannerWrapper = styled.div `
    display: relative;
    font-family: 'Poppins';
    margin: 5rem 0rem;
`