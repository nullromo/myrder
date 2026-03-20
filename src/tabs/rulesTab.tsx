import myrServitorCard from '../images/cards/myr-servitor.png';
import reanimate1 from '../images/cards/reanimate-1.png';
import reanimate2 from '../images/cards/reanimate-2.png';
import reanimate3 from '../images/cards/reanimate-3.png';
import reanimate4 from '../images/cards/reanimate-4.png';
import reanimate5 from '../images/cards/reanimate-5.png';
import reanimate6 from '../images/cards/reanimate-6.png';
import reanimate7 from '../images/cards/reanimate-7.png';
import reanimate8 from '../images/cards/reanimate-8.png';
import { EmphasisText } from '../util/emphasisText';
import { TabContent } from './tabContent';

export const RulesTab = () => {
    return (
        <TabContent>
            <p style={{ margin: '40px 20%', textAlign: 'center' }}>
                <EmphasisText back='black' front='red' text='Myrder' /> is a{' '}
                Magic format in which two players{' '}
                <EmphasisText front='black' text='share the same library' />.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ul style={{ marginTop: 0 }}>
                    <li>
                        The Myrder deck has{' '}
                        <EmphasisText front='black' text='80 cards' />.
                    </li>
                    <li>
                        Players start at{' '}
                        <EmphasisText front='black' text='10 life' />.
                    </li>
                    <li>
                        <EmphasisText front='black' text='Graveyards' /> are{' '}
                        <EmphasisText front='black' text='not shared' />.
                    </li>
                    <li>Normal mulligan rules apply.</li>
                </ul>
                <ul style={{ margin: 0, width: '40%' }}>
                    <li>
                        The owner of a card is the player who put it onto the
                        battlefield or the player whose hidden zone it is in.
                    </li>
                </ul>
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
                <div style={{ maxWidth: '700px' }}>
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
                <img src={myrServitorCard} style={{ width: '30%' }} />
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
