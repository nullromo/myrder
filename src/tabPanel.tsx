import * as React from 'react';

type TabData = { label: string; content: React.ReactNode };

export const TabPanel = (props: { readonly tabs: TabData[] }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <div>
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
                                    activeIndex === index ? 'yellow' : 'green',
                                borderRadius: '10px 10px 0 0',
                                cursor: 'pointer',
                                padding: '10px',
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
            {props.tabs[activeIndex].content}
        </div>
    );
};
