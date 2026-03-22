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

export const EmphasisText = (props: {
    readonly front: Color;
    readonly back?: Color;
    readonly text: string;
    readonly notBold?: boolean;
}) => {
    return (
        <span
            style={{
                color: colorToRealColor(props.front),
                fontWeight: props.notBold ? 'normal' : 'bold',
                position: 'relative',
                textShadow: props.back
                    ? `2px 2px 2px ${colorToRealColor(props.back)}`
                    : '',
            }}
        >
            {props.text}
        </span>
    );
};

export const CardName = (props: { readonly name: string }) => {
    return (
        <EmphasisText
            back='black'
            front='white'
            notBold={true}
            text={props.name}
        />
    );
};
