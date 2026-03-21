import * as React from 'react';
import { myrderBlue, myrderRed } from '../util/colors';

type TabData = { label: string; content: React.ReactNode };

export const TabPanel = (props: { readonly tabs: TabData[] }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    fontFamily: 'MPlantin',
                    fontSize: '20pt',
                    justifyContent: 'space-evenly',
                    width: '100%',
                }}
            >
                {props.tabs.map((tab, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                alignItems: 'center',
                                background:
                                    activeIndex === index
                                        ? myrderBlue
                                        : myrderRed,
                                borderRadius: '10px 10px 0 0',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '6px 30px',
                                position: 'relative',
                                textAlign: 'center',
                                top: 2,
                                touchAction: 'manipulation',
                                userSelect: 'none',
                            }}
                            onClick={() => {
                                setActiveIndex(index);
                            }}
                        >
                            {tab.label}
                        </div>
                    );
                })}
            </div>
            <div
                style={{
                    background: myrderBlue,
                    borderRadius: '0 0 10px 10px',
                    flexGrow: 1,
                    padding: '10px',
                    position: 'relative',
                }}
            >
                {props.tabs[activeIndex].content}
            </div>
        </>
    );
};
