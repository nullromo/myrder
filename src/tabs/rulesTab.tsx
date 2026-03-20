import { TabContent } from './tabContent';
import myrServitorCard from '../images/cards/myr-servitor.png';
import reanimate1 from '../images/cards/reanimate-1.png';
import reanimate2 from '../images/cards/reanimate-2.png';
import reanimate3 from '../images/cards/reanimate-3.png';
import reanimate4 from '../images/cards/reanimate-4.png';
import reanimate5 from '../images/cards/reanimate-5.png';
import reanimate6 from '../images/cards/reanimate-6.png';
import reanimate7 from '../images/cards/reanimate-7.png';
import reanimate8 from '../images/cards/reanimate-8.png';
import { myrderBlue, myrderRed } from '../util/colors';

type Color = 'black' | 'red' | 'white' | 'blue';
const colorToRealColor = (color: Color) => {
    switch (color) {
        case 'black':
            return 'black';
        case 'white':
            return 'white';
        case 'blue':
            return myrderBlue;
        case 'red':
            return myrderRed;
        default:
            return '';
    }
};
const EmphasisText = (props: { front: Color; back: Color; text: string }) => {
    return (
        <span
            style={{
                textShadow: `2px 2px 2px ${colorToRealColor(props.back)}`,
                color: colorToRealColor(props.front),
                fontWeight: 'bold',
                position: 'relative',
                top: -1,
            }}
        >
            {props.text}
        </span>
    );
};

export const RulesTab = () => {
    //Rules content goes here. It should be an overview of how the game works and what it's all about. There should be a picture of the card Myr Servitor here.
    return (
        <TabContent>
            <p>
                <EmphasisText text='Myrder' front='red' back='black' /> is a{' '}
                Magic format in which two players{' '}
                <EmphasisText
                    text='share the same library'
                    front='red'
                    back='black'
                />
                . The Myrder deck has{' '}
                <EmphasisText text='80 cards' front='red' back='black' />.
                Players start at{' '}
                <EmphasisText text='10 life' front='red' back='black' />.{' '}
                <EmphasisText
                    text='Graveyards are not shared'
                    front='red'
                    back='black'
                />
                . The owner of a card on the battlefield or in a private zone is
                the player who put it onto the battlefield or the player whose
                zone it is in, respectively. Normal mulligan rules apply.
            </p>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingRight: '6%',
                    paddingTop: '20px',
                    columnGap: '20px',
                    alignItems: 'center',
                }}
            >
                <div style={{ maxWidth: '700px' }}>
                    <p></p>
                    <p>
                        <EmphasisText
                            front='white'
                            back='black'
                            text='Myr Servitor'
                        />{' '}
                        is the face card of this format. There are 18 of them in
                        the deck.
                    </p>
                </div>
                <img style={{ width: '30%' }} src={myrServitorCard} />
            </div>
            <div style={{ padding: '0 0' }}>
                <p>
                    These little robots love to rebuild each other... but{' '}
                    <EmphasisText front='red' back='black' text='oops!' /> They
                    help your opponent too! It only takes 1{' '}
                    <EmphasisText
                        front='white'
                        back='black'
                        text='Myr Servitor'
                    />{' '}
                    on the battlefield to bring them all back from the dead. Do
                    your best to{' '}
                    <EmphasisText
                        text='amass a robot army'
                        front='red'
                        back='black'
                    />{' '}
                    before your opponent can do the same! And no worries if some
                    of them die along the way—they'll just keep rebuilding each
                    other.
                </p>
            </div>
            <div
                style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    display: 'flex',
                }}
            >
                <div style={{ width: '60%' }}>
                    <img style={{ width: '25%' }} src={reanimate1} />
                    <img style={{ width: '25%' }} src={reanimate2} />
                    <img style={{ width: '25%' }} src={reanimate7} />
                    <img style={{ width: '25%' }} src={reanimate4} />
                    <img style={{ width: '25%' }} src={reanimate5} />
                    <img style={{ width: '25%' }} src={reanimate6} />
                    <img style={{ width: '25%' }} src={reanimate3} />
                    <img style={{ width: '25%' }} src={reanimate8} />
                </div>
                <div style={{ width: '38%' }}>
                    Myrder focuses on{' '}
                    <EmphasisText
                        text='Myr Servitor'
                        front='white'
                        back='black'
                    />{' '}
                    as a unique shared resource that can be exploited by both
                    players. 8 copies of{' '}
                    <EmphasisText text='Reanimate' front='red' back='black' />{' '}
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
