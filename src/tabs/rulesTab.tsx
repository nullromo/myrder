import myrServitorCard from '../images/cards/myr-servitor.webp';
import reanimate1 from '../images/cards/reanimate-1.webp';
import reanimate2 from '../images/cards/reanimate-2.webp';
import reanimate3 from '../images/cards/reanimate-3.webp';
import reanimate4 from '../images/cards/reanimate-4.webp';
import reanimate5 from '../images/cards/reanimate-5.webp';
import reanimate6 from '../images/cards/reanimate-6.webp';
import reanimate7 from '../images/cards/reanimate-7.webp';
import reanimate8 from '../images/cards/reanimate-8.webp';
import { EmphasisText } from '../util/emphasisText';
import { TabContent } from './tabContent';

const deckIcon = (
    <svg
        style={{
            fill: 'white',
            height: '100px',
            position: 'relative',
            stroke: 'black',
            strokeLinejoin: 'round',
            strokeWidth: '1.4',
        }}
        viewBox='0 0 18 18.5'
    >
        <polygon points='2 2 12 2 12 14.5 2 14.5' />
        <polygon points='4 3 14 3 14 15.5 4 15.5' />
        <polygon points='6 4 16 4 16 16.5 6 16.5' />
        <text
            style={{
                fill: 'black',
                fontFamily: 'Beleren, serif',
                fontSize: '5pt',
                strokeWidth: '.1px',
            }}
            x='7'
            y='12.5'
        >
            80
        </text>
    </svg>
);

const mulliganIcon = (
    <svg
        style={{
            fill: 'white',
            height: '100px',
            position: 'relative',
            stroke: 'black',
            strokeLinejoin: 'round',
            strokeWidth: '1.4',
        }}
        viewBox='0 0 28 18.5'
    >
        <polygon points='2  2 12 2 12 14.5 2  14.5' />
        <polygon points='4  3 14 3 14 15.5 4  15.5' />
        <polygon points='16 2 26 2 26 14.5 16 14.5' />
        <text
            style={{
                fill: 'black',
                fontFamily: 'Beleren, serif',
                fontSize: '6pt',
                strokeWidth: '.1px',
            }}
            x='7.3'
            y='12'
        >
            7
        </text>
        <text
            style={{
                fill: 'black',
                fontFamily: 'Beleren, serif',
                fontSize: '6pt',
                strokeWidth: '.1px',
            }}
            x='17.2'
            y='10.7'
        >
            -1
        </text>
    </svg>
);

const lifeIcon = (
    <svg
        style={{
            fill: 'white',
            height: '100px',
            position: 'relative',
            stroke: 'black',
            strokeLinejoin: 'round',
            strokeWidth: '1.4',
        }}
        viewBox='0 0 17 18'
    >
        <path d='M 9 1 L 2 8 L 2 11 L 9 17 L 16 11 L 16 8 Z L 4 11 L 9 13 L 14 11 Z M 2 11 L 4 11 M 9 13 L 9 17 M 14 11 L 16 11' />
        <text
            style={{
                fill: 'black',
                fontFamily: 'Beleren, serif',
                fontSize: '4pt',
                strokeWidth: '.1px',
            }}
            x='6.2'
            y='11'
        >
            10
        </text>
    </svg>
);

const graveyardIcon = (
    <svg
        style={{
            fill: 'white',
            height: '100px',
            position: 'relative',
            stroke: 'black',
            strokeLinejoin: 'round',
            strokeWidth: '1',
        }}
        viewBox='0 0 17 12'
    >
        <path d='M 1 3 C 1 3 4 0 7 3 L 7 10 L 1 10 Z' />
        <path d='M 10 3 C 10 3 13 0 16 3 L 16 10 L 10 10 Z' />
        <text
            style={{
                fill: 'black',
                fontFamily: 'Beleren, serif',
                fontSize: '4pt',
                strokeWidth: '.1px',
            }}
            x='2.6'
            y='7.5'
        >
            -
        </text>
        <text
            style={{
                fill: 'black',
                fontFamily: 'Beleren, serif',
                fontSize: '4pt',
                strokeWidth: '.1px',
            }}
            x='11.6'
            y='7.5'
        >
            -
        </text>
    </svg>
);

const IconBox = (props: React.PropsWithChildren) => {
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
            }}
        >
            {props.children}
        </div>
    );
};

export const RulesTab = () => {
    return (
        <TabContent>
            <p style={{ margin: '40px 20%', textAlign: 'center' }}>
                <EmphasisText back='black' front='red' text='Myrder' /> is a{' '}
                Magic format in which two players{' '}
                <EmphasisText front='black' text='share the same library' />
            </p>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: '10px 0 30px 0',
                    rowGap: '20px',
                }}
            >
                <IconBox>
                    {deckIcon}
                    <div>
                        The Myrder deck has{' '}
                        <EmphasisText front='black' text='80 cards' />
                    </div>
                </IconBox>
                <IconBox>
                    {lifeIcon}
                    <div>
                        Players start at{' '}
                        <EmphasisText front='black' text='10 life' />
                    </div>
                </IconBox>
                <IconBox>
                    {graveyardIcon}
                    <div>Graveyards are not shared</div>
                </IconBox>
                <IconBox>
                    {mulliganIcon}
                    <div>Normal mulligan rules apply</div>
                </IconBox>
            </div>
            <div
                style={{
                    alignItems: 'center',
                    columnGap: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingRight: '6%',
                    paddingTop: '20px',
                }}
            >
                <div style={{ maxWidth: '400px' }}>
                    <p />
                    <p>
                        <EmphasisText
                            back='black'
                            front='white'
                            notBold={true}
                            text='Myr Servitor'
                        />{' '}
                        is the face card of this format. There are 18 of them in
                        the deck.
                    </p>
                </div>
                <img src={myrServitorCard} style={{ maxWidth: '20%' }} />
            </div>
            <div style={{ padding: '0 0' }}>
                <p>
                    These little robots love to rebuild each other... but{' '}
                    <EmphasisText back='black' front='red' text='oops!' /> They
                    help your opponent too! It only takes 1{' '}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Myr Servitor'
                    />{' '}
                    on the battlefield to bring them all back from the dead. Do
                    your best to{' '}
                    <EmphasisText front='black' text='amass a robot army' />{' '}
                    before your opponent can do the same! And no worries if some
                    of them die along the way—{"they'll"} just keep rebuilding
                    each other.
                </p>
            </div>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div style={{ width: '60%' }}>
                    <img src={reanimate1} style={{ width: '25%' }} />
                    <img src={reanimate2} style={{ width: '25%' }} />
                    <img src={reanimate7} style={{ width: '25%' }} />
                    <img src={reanimate4} style={{ width: '25%' }} />
                    <img src={reanimate5} style={{ width: '25%' }} />
                    <img src={reanimate6} style={{ width: '25%' }} />
                    <img src={reanimate3} style={{ width: '25%' }} />
                    <img src={reanimate8} style={{ width: '25%' }} />
                </div>
                <div style={{ width: '38%' }}>
                    Myrder focuses on{' '}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Myr Servitor'
                    />{' '}
                    as a unique shared resource that can be exploited by both
                    players. 8 copies of{' '}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Reanimate'
                    />{' '}
                    provide a push and pull to the gameplay which helps you
                    fight over the same pool of resources.
                </div>
            </div>
            <p>
                The format is all about tricky little edges, and since all the
                spells are so cheap you get to cast a lot of them over the
                course of the game. Paying close attention to which cards are
                instants will benefit you, as there are a number of cute
                interactions that can occur throughout the deck.
            </p>
        </TabContent>
    );
};
