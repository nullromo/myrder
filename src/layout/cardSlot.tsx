import { CardImages } from '../images/cards/cardImages';
import { OtherCardImages } from '../images/otherCards/otherCardImages';
import { EmphasisText } from '../util/emphasisText';

export const CardSlot = (props: {
    readonly cardName: keyof typeof CardImages | keyof typeof OtherCardImages;
    readonly description?: string;
    readonly count?: number;
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
                padding: '2px',
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
                    <div style={{ fontSize: '14pt' }}>
                        {props.count ? (
                            <>
                                <EmphasisText
                                    front='black'
                                    text={`${props.count}`}
                                />{' '}
                            </>
                        ) : null}
                        <EmphasisText
                            back='black'
                            front='white'
                            notBold={true}
                            text={props.cardName}
                        />
                    </div>
                    {props.removed ? (
                        <div
                            style={{
                                background: 'black',
                                borderRadius: '10px',
                                fontSize: '26pt',
                                padding: '0 10px 1px 10px',
                                position: 'absolute',
                                top: '460%',
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
                    style={{ maxWidth: '200px' }}
                />
                <em>{props.description}</em>
            </div>
        </div>
    );
};
