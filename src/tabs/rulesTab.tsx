import { TabContent } from './tabContent';
import myrServitorCard from '../images/cards/myr-servitor.png';
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
                    <p>
                        Myrder is a one-on-one shared-deck format in which two
                        players play Magic against each other using a single
                        copy of the same deck.
                    </p>
                    <p>
                        <EmphasisText
                            front='white'
                            back='black'
                            text='Myr Servitor'
                        />{' '}
                        is the face card of this format.
                    </p>
                </div>
                <img style={{ width: '30%' }} src={myrServitorCard} />
            </div>
            <p>
                These little robots will rebuild each other until the cows come
                home... but{' '}
                <EmphasisText front='red' back='black' text='oops!' /> They
                rebuild your opponent's robots too! It only takes 1 [[Myr
                Servitor]] on the battlefield to bring them all back from the
                dead. So do your best to gather as many as you can to amass a
                robot army before your opponent can do the same! And no worries
                if some of them die along the way; they're just going to keep on
                rebuilding each other :)
            </p>
        </TabContent>
    );
};
