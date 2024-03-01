import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import 'react-icons/fa'; // Correct import for FontAwesome styles

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const gototop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 100;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <>
            {isVisible && (
                <Wrapper>
                    <div className="top_btn" onClick={gototop}>

                        <FaArrowUp className="top-btn--icon" />
                    </div>
                </Wrapper>
            )}
        </>
    );
};

const theme = {
    colors: {
        btn: 'green', // Replace with your actual button color
    },
    media: {
        mobile: 'yourMobileMediaQuery', // Replace with your actual mobile media query
    },
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top_btn {
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: #15555f;
    box-shadow: ${({ theme }) => theme.colors.shadow}; // Make sure to define 'shadow' in your theme
    border-radius: 50%;
    position: fixed;
    bottom: 1.5rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

 @media (max-width: 500px) {
    width: 2rem;
    height: 2rem;
    bottom: 1.5rem;
    right: 1.5rem;
    font-size: 1rem;
 }


    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top_btn {
      right: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
   @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BackToTop />
            {/* Other components go here */}
        </ThemeProvider>
    );
};

export default App;
