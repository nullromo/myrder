import { CardImages } from '../images/cards/cardImages';
import { Title } from '../layout/title';
import { darkBlue } from '../util/colors';
import { EmphasisText } from '../util/emphasisText';
import { TabContent } from './tabContent';

const CardSlot = (props: {
    readonly cardName: keyof typeof CardImages;
    readonly description?: string;
    readonly count?: number;
}) => {
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
                <div>
                    <EmphasisText front='black' text={`${props.count ?? 1}`} />{' '}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text={props.cardName}
                    />
                </div>
                <img
                    src={CardImages[props.cardName]}
                    style={{ maxWidth: '300px', width: '96%' }}
                />
                <em>{props.description}</em>
            </div>
        </div>
    );
};

const DecklistSection = (
    props: {
        readonly description: string;
        readonly title: string;
    } & React.PropsWithChildren,
) => {
    return (
        <div style={{ marginBottom: '40px', width: '100%' }}>
            <div
                style={{
                    background: darkBlue,
                    border: '1px solid white',
                    borderRadius: '20px',
                    margin: '20px auto auto auto',
                    maxWidth: '1400px',
                }}
            >
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <span
                        style={{
                            background: darkBlue,
                            border: '1px solid white',
                            borderRadius: '10px',
                            fontSize: '24pt',
                            padding: '0 10px',
                            position: 'relative',
                            top: -15,
                        }}
                    >
                        {props.title}
                    </span>
                </div>
                <div
                    style={{
                        margin: '20px 30px 40px 30px',
                        textAlign: 'center',
                        textWrap: 'balance',
                    }}
                >
                    {props.description}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export const DecklistTab = () => {
    return (
        <TabContent>
            <Title title='Decklist Rationale' />
            This list was created using the following guiding principles.*
            <ol>
                <li>
                    <EmphasisText front='black' text='(Mandatory)' /> There can
                    be no creatures nor creature tokens other than{' '}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Myr Servitor'
                    />
                    .
                </li>
                <li>
                    Targeted removal spells should exile their target{' '}
                    <em>(so that they actually do something)</em>.
                </li>
                <li>
                    Mass removal spells should not exile{' '}
                    <em>(so that they {"don't"} do too much)</em>.
                </li>
                <li>
                    Draw spells should always come with a game-state condition{' '}
                    <em>(other than just losing life)</em>.
                </li>
                <li>
                    Do not include any permanents other than lands and{' '}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Myr Servitor'
                    />
                    s <em>(unless they sacrifice themselves upon use)</em>.
                </li>
                <li>
                    <EmphasisText front='black' text='(Optional)' /> Do not
                    include any double-faced cards.
                </li>
            </ol>
            <em style={{ fontSize: '16pt' }}>
                *These are guiding principles, not hard rules. There may be some
                small bends or breaks.
            </em>
            <Title title='Decklist' />
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                All the cards in the deck are shown in this section. There is a
                text version of the decklist below as well.
            </div>
            <DecklistSection
                description='Basic elements of the deck: myr, reanimates, and swamps.'
                title='Core Elements'
            >
                <CardSlot cardName='Myr Servitor' count={18} />
                <CardSlot cardName='Reanimate' count={8} />
                <CardSlot cardName='Swamp' count={12} />
            </DecklistSection>
            <DecklistSection
                description='Card advantage spells. These require you to sacrifice something in order to draw 2 cards.'
                title='Draw Spells'
            >
                <CardSlot cardName='Corrupted Conviction' />
                <CardSlot cardName='Village Rites' />
                <CardSlot cardName="Altar's Reap" />
                <CardSlot cardName='Costly Plunder' />
                <CardSlot cardName='Deadly Dispute' />
                <CardSlot cardName="Eviscerator's Insight" />
                <CardSlot cardName='Fanatical Offering' />
                <CardSlot cardName='Nasty End' />
                <CardSlot cardName="Reckoner's Bargain" />
            </DecklistSection>
            <DecklistSection
                description='Removal spells. These exile one creature at a time from the battlefield.'
                title='Removal'
            >
                <CardSlot cardName='Eaten Alive' />
                <CardSlot cardName='Final Vengeance' />
                <CardSlot cardName='Infernal Reckoning' />
                <CardSlot cardName='Necrotic Wound' />
                <CardSlot cardName='Worthy Cost' />
                <CardSlot cardName='Cannibalize' />
            </DecklistSection>
            <DecklistSection
                description='Mass removal spells. These usually kill all the myr on the battlefield, but they do not exile them.'
                title='Wraths'
            >
                <CardSlot cardName='Bile Blight' />
                <CardSlot cardName="Black Sun's Zenith" />
                <CardSlot cardName='Nausea' />
                <CardSlot cardName='Shrivel' />
                <CardSlot cardName='Mephitic Vapors' />
            </DecklistSection>
            <DecklistSection
                description='Graveyard removal spells. These exile cards from the graveyard.'
                title='Graveyard Hate'
            >
                <CardSlot cardName='Coffin Purge' />
                <CardSlot cardName='Cremate' />
                <CardSlot cardName='Shadowfeed' />
                <CardSlot cardName='Headstone' />
            </DecklistSection>
            <DecklistSection
                description='Other cards. There are a few other cards that do not fit into the categories above.'
                title='Other Stuff'
            >
                <CardSlot cardName='Cabal Therapy' />
                <CardSlot cardName='Entomb' />
                <CardSlot cardName='Inquisition of Kozilek' />
                <CardSlot cardName='Grave Consequences' />
                <CardSlot cardName='Haunting Misery' />
            </DecklistSection>
            <DecklistSection
                description='Ways to produce mana outside of the basic swamps. These can help draw cards or provide some other additional effect.'
                title='Lands'
            >
                <CardSlot cardName='Barren Moor' />
                <CardSlot cardName='Blast Zone' />
                <CardSlot cardName='Blasted Landscape' />
                <CardSlot cardName='Cryptic Caves' />
                <CardSlot cardName='Desert of the Glorified' />
                <CardSlot cardName='Polluted Mire' />
                <CardSlot cardName='Roadside Reliquary' />
                <CardSlot cardName='Scene of the Crime' />
                <CardSlot cardName='Takenuma, Abandoned Mire' />
                <CardSlot cardName='The Dross Pits' />
                <CardSlot cardName='Tomb Fortress' />
                <CardSlot cardName='Vault of Whispers' />
                <CardSlot cardName='Midgar, City of Mako // Reactor Raid' />
            </DecklistSection>
            <Title title='Text Decklist' />
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '20px',
                }}
            >
                <div>Alphabetized, copyable decklist for convenience.</div>
                <div
                    style={{
                        background: 'white',
                        color: 'black',
                        fontSize: '12pt',
                        margin: 'auto',
                        padding: '20px',
                    }}
                >
                    {[
                        "1 Altar's Reap",
                        "1 Black Sun's Zenith",
                        "1 Eviscerator's Insight",
                        "1 Reckoner's Bargain",
                        '1 Barren Moor',
                        '1 Bile Blight',
                        '1 Blast Zone',
                        '1 Blasted Landscape',
                        '1 Cabal Therapy',
                        '1 Cannibalize',
                        '1 Coffin Purge',
                        '1 Corrupted Conviction',
                        '1 Costly Plunder',
                        '1 Cremate',
                        '1 Cryptic Caves',
                        '1 Deadly Dispute',
                        '1 Desert of the Glorified',
                        '1 Eaten Alive',
                        '1 Entomb',
                        '1 Fanatical Offering',
                        '1 Final Vengeance',
                        '1 Grave Consequences',
                        '1 Haunting Misery',
                        '1 Headstone',
                        '1 Infernal Reckoning',
                        '1 Inquisition of Kozilek',
                        '1 Mephitic Vapors',
                        '1 Midgar, City of Mako // Reactor Raid',
                        '18 Myr Servitor',
                        '1 Nasty End',
                        '1 Nausea',
                        '1 Necrotic Wound',
                        '1 Polluted Mire',
                        '8 Reanimate',
                        '1 Roadside Reliquary',
                        '1 Scene of the Crime',
                        '1 Shadowfeed',
                        '1 Shrivel',
                        '12 Swamp',
                        '1 Takenuma, Abandoned Mire',
                        '1 The Dross Pits',
                        '1 Tomb Fortress',
                        '1 Vault of Whispers',
                        '1 Village Rites',
                        '1 Worthy Cost',
                    ].map((line, index) => {
                        return <div key={index}>{line}</div>;
                    })}
                </div>
            </div>
            <Title title='Individual Card Notes' />
            Playing the game and learning all the neat little interactions is
            part of the fun. However, this section mentions some of the more
            commonly missed things.
            <ul>
                <li>
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Vault of Whispers'
                    />{' '}
                    is an artifact. Some spells let you sacrifice artifacts.
                </li>
                <li>
                    Read{' '}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Scene of the Crime'
                    />{' '}
                    carefully. Notice anything missing? {"Here's"} a{' '}
                    <span style={{ textDecoration: 'underline' }}>clue</span>:
                    look for a tap symbol in the last ability. {"Didn't"} find
                    it? Hmm...
                </li>
                <li>
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Cannibalize'
                    />{' '}
                    has a weird trick where if one of the targets {"doesn't"}{' '}
                    exist by the time it resolves, you can do just one of the
                    things. For instance, if you cast it targeting your own
                    creatures, you can sacrifice one in response and just get
                    the{' '}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Cannibalize'
                    />{' '}
                    counters on the other. If you cast it targeting your{' '}
                    {"opponent's"} creatures, you can exile one in response and
                    just do the{' '}
                    <EmphasisText
                        back='black'
                        front='white'
                        notBold={true}
                        text='Cannibalize'
                    />{' '}
                    exile.
                </li>
            </ul>
        </TabContent>
    );
};
