import { CardImages } from '../images/cards/cardImages';
import { OtherCardImages } from '../images/otherCards/otherCardImages';
import { EmphasisText } from '../util/emphasisText';

export const CardSlot = (props: {
    readonly cardName: keyof typeof CardImages | keyof typeof OtherCardImages;
    readonly description?: string;
    readonly count?: number | null;
    readonly small?: boolean;
    readonly removed?: boolean;
}) => {
    const images = { ...CardImages, ...OtherCardImages };
    return (
        <div
            style={{
                alignItems: 'center',
                columnGap: '10px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                    }}
                >
                    {props.count === null ? null : (
                        <>
                            <EmphasisText
                                front='black'
                                text={`${props.count ?? 1}`}
                            />{' '}
                        </>
                    )}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text={props.cardName}
                    />
                    {props.removed ? (
                        <div
                            style={{
                                background: 'black',
                                borderRadius: '10px',
                                fontSize: '26pt',
                                padding: '0 10px 1px 10px',
                                position: 'absolute',
                                top: '370%',
                                transform: 'rotate(-45deg)',
                            }}
                        >
                            <EmphasisText
                                back='black'
                                front='red'
                                text='Removed'
                            />
                        </div>
                    ) : null}
                </div>
                <img
                    src={images[props.cardName]}
                    style={{
                        maxWidth: props.small ? '200px' : '300px',
                        width: '96%',
                    }}
                />
                <em>{props.description}</em>
            </div>
        </div>
    );
};
