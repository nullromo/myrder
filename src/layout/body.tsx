import * as React from 'react';
import { myrderBlue } from '../util/colors';
import { BodyTabs } from './bodyTabs';
import { PictureTitle } from './pictureTitle';
import { Tagline } from './tagline';

export const Body = () => {
    const [showScrollToTop, setShowScrollToTop] = React.useState(false);

    React.useEffect(() => {
        window.onscroll = () => {
            setShowScrollToTop(
                document.body.scrollTop > 0 ||
                    document.documentElement.scrollTop > 0,
            );
        };
        return () => {
            window.onscroll = null;
        };
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <PictureTitle />
            <div
                style={{
                    alignItems: 'center',
                    background: 'black',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    marginTop: '70px',
                }}
            >
                <Tagline />
                <BodyTabs />
                {showScrollToTop ? (
                    <a
                        href='#'
                        style={{
                            background: myrderBlue,
                            borderRadius: '10px',
                            bottom: 0,
                            boxShadow: '0px 0px 2px 2px black',
                            color: 'inherit',
                            cursor: 'pointer',
                            fontFamily: 'MPlantin, serif',
                            margin: '0 20px 12px 0',
                            padding: '10px',
                            position: 'fixed',
                            right: 0,
                            textDecoration: 'none',
                            touchAction: 'manipulation',
                            userSelect: 'none',
                        }}
                        onClick={() => {
                            console.log();
                        }}
                    >
                        Scroll to top
                    </a>
                ) : null}
            </div>
        </div>
    );
};
