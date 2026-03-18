import { myrderBlue, myrderRed } from './colors';
import myrServitor from './images/myr-servitor-art.jpg';
import { TabPanel } from './tabPanel';

export const Body = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${myrServitor})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    boxShadow: 'inset 0px -12px 12px 8px',
                    display: 'flex',
                    height: '40vh',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        background: 'black',
                        borderRadius: '20px',
                        boxShadow: '0px 0px 12px 8px',
                        fontFamily: 'Beleren',
                        fontSize: '64pt',
                        height: 'fit-content',
                        padding: '0 24px 0 20px',
                        position: 'relative',
                        textAlign: 'center',
                        top: '90%',
                        width: 'fit-content',
                    }}
                >
                    <span style={{ color: myrderRed }}>MYR</span>
                    <span style={{ color: myrderBlue }}>DER</span>
                </div>
            </div>
            <div
                style={{
                    alignItems: 'center',
                    background: 'black',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    height: '100px',
                    marginTop: '70px',
                }}
            >
                <div
                    style={{
                        fontFamily: 'MPlantin',
                        fontSize: '30pt',
                        textAlign: 'center',
                    }}
                >
                    A{' '}
                    <span
                        style={{
                            color: myrderRed,
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                        }}
                    >
                        NEW
                    </span>{' '}
                    shared-deck Magic the Gathering format based around{' '}
                    <span style={{ color: myrderBlue, fontWeight: 'bold' }}>
                        Myr Servitor
                    </span>
                </div>
                <hr
                    style={{
                        marginBottom: '20px',
                        marginTop: '20px',
                        width: '80%',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        fontFamily: 'MPlantin',
                        fontSize: '20pt',
                        fontStyle: 'italic',
                        justifyContent: 'space-around',
                        marginBottom: '80px',
                        width: '100%',
                    }}
                >
                    <div>{`"It's black Dandân"`}</div>
                    <div>{'"I love it!"'}</div>
                    <div>{'"Definitely worth a try"'}</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: '90%',
                    }}
                >
                    <TabPanel
                        tabs={[
                            {
                                content:
                                    "Rules content goes here. It should be an overview of how the game works and what it's all about. There should be a picture of the card Myr Servitor here.",
                                label: 'Rules',
                            },
                            {
                                content:
                                    'Decklist content goes here. It should show off the cards in the deck and explain some of the synergy.',
                                label: 'Decklist',
                            },
                            {
                                content:
                                    'Changelog content goes here. It should be a blog-like running account of what has changed.',
                                label: 'Changelog',
                            },
                            {
                                content:
                                    'About information goes here. It should have links to the gihub page, the support ($) page, the business card, and the disclaimer information.',
                                label: 'About',
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
