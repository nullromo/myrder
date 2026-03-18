import * as React from 'react';
import { myrderBlue, myrderRed } from './colors';

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
                                background:
                                    activeIndex === index
                                        ? myrderBlue
                                        : myrderRed,
                                borderRadius: '10px 10px 0 0',
                                cursor: 'pointer',
                                padding: '6px 30px',
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
                    borderRadius: '10px',
                    flexGrow: 1,
                    padding: '10px',
                }}
            >
                {props.tabs[activeIndex].content}
            </div>
        </>
    );
};
