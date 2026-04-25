import { ManaImages } from '../images/mana/cardImages';
import { CardSlot } from '../layout/cardSlot';
import { DarkSection } from '../layout/darkSection';
import { Title } from '../layout/title';
import { CardName, EmphasisText } from '../util/emphasisText';
import { TabContent } from './tabContent';

const DecklistCard = (props: {
    readonly count?: number;
    readonly name: string;
    readonly mana: Array<keyof typeof ManaImages>;
}) => {
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
            }}
        >
            <div style={{ display: 'flex', paddingRight: '10px' }}>
                <div
                    style={{
                        paddingRight: '6px',
                        textAlign: 'right',
                        width: '24px',
                    }}
                >
                    <EmphasisText front='black' text={`${props.count ?? 1}`} />
                </div>
                <CardName name={props.name} />
            </div>
            <div
                style={{
                    display: 'flex',
                    height: '16pt',
                    justifyContent: 'flex-end',
                    paddingRight: '20%',
                    width: '16pt',
                }}
            >
                {props.mana.map((symbol, index) => {
                    return (
                        <img
                            key={index}
                            src={ManaImages[symbol]}
                            style={{ height: '16pt', width: '16pt' }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const DecklistSection = (
    props: { readonly title: string } & React.PropsWithChildren,
) => {
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
            <div style={{ paddingTop: '4px' }}>
                <EmphasisText front='black' text={props.title} />
            </div>
            {props.children}
        </div>
    );
};

export const DecklistTab = () => {
    return (
        <TabContent>
            <Title title='Decklist' />
            <p
                style={{
                    marginTop: 0,
                    padding: '0 4%',
                    textAlign: 'center',
                    textWrap: 'balance',
                }}
            >
                This section lists the standard Myrder deck. The sections below
                explain the cards in detail and provide additional context about
                the construction of the deck.
            </p>
            <p
                style={{
                    marginTop: 0,
                    padding: '0 4%',
                    textAlign: 'center',
                    textWrap: 'balance',
                }}
            >
                The decklist here is the {'"stock decklist,"'} but feel free to
                customize your own personal list to your liking :)
            </p>
            <div
                style={{
                    display: 'flex',
                    fontSize: '16pt',
                    justifyContent: 'center',
                    marginBottom: '20px',
                }}
            >
                <div style={{ maxWidth: '600px', width: '100%' }}>
                    <DecklistSection title='Core Elements'>
                        <DecklistCard
                            count={18}
                            mana={['1']}
                            name='Myr Servitor'
                        />
                        <DecklistCard count={8} mana={['B']} name='Reanimate' />
                    </DecklistSection>
                    <DecklistSection title='Draw Spells'>
                        <DecklistCard
                            mana={['B']}
                            name='Corrupted Conviction'
                        />
                        <DecklistCard mana={['B']} name='Village Rites' />
                        <DecklistCard mana={['1', 'B']} name="Altar's Reap" />
                        <DecklistCard mana={['1', 'B']} name='Costly Plunder' />
                        <DecklistCard mana={['1', 'B']} name='Deadly Dispute' />
                        <DecklistCard
                            mana={['1', 'B']}
                            name="Eviscerator's Insight"
                        />
                        <DecklistCard
                            mana={['1', 'B']}
                            name='Fanatical Offering'
                        />
                        <DecklistCard mana={['1', 'B']} name='Nasty End' />
                        <DecklistCard
                            mana={['1', 'B']}
                            name="Reckoner's Bargain"
                        />
                    </DecklistSection>
                    <DecklistSection title='Removal'>
                        <DecklistCard mana={['B']} name='Eaten Alive' />
                        <DecklistCard mana={['B']} name='Final Vengeance' />
                        <DecklistCard mana={['B']} name='Infernal Reckoning' />
                        <DecklistCard mana={['B']} name='Necrotic Wound' />
                        <DecklistCard mana={['B']} name='Worthy Cost' />
                        <DecklistCard mana={['1', 'B']} name='Cannibalize' />
                    </DecklistSection>
                    <DecklistSection title='Other Stuff'>
                        <DecklistCard mana={['B']} name='Cabal Therapy' />
                        <DecklistCard mana={['B']} name='Entomb' />
                        <DecklistCard
                            mana={['B']}
                            name='Inquisition of Kozilek'
                        />
                        <DecklistCard
                            mana={['1', 'B']}
                            name='Grave Consequences'
                        />
                        <DecklistCard
                            mana={['1', 'B', 'B']}
                            name='Haunting Misery'
                        />
                    </DecklistSection>
                </div>
                <div style={{ maxWidth: '600px', width: '100%' }}>
                    <DecklistSection title='Graveyard Hate'>
                        <DecklistCard mana={['B']} name='Coffin Purge' />
                        <DecklistCard mana={['B']} name='Cremate' />
                        <DecklistCard mana={['B']} name='Shadowfeed' />
                        <DecklistCard mana={['1', 'B']} name='Headstone' />
                    </DecklistSection>
                    <DecklistSection title='Wraths'>
                        <DecklistCard mana={['B', 'B']} name='Bile Blight' />
                        <DecklistCard
                            mana={['X', 'B', 'B']}
                            name="Black Sun's Zenith"
                        />
                        <DecklistCard mana={['1', 'B']} name='Nausea' />
                        <DecklistCard mana={['1', 'B']} name='Shrivel' />
                        <DecklistCard
                            mana={['2', 'B']}
                            name='Mephitic Vapors'
                        />
                    </DecklistSection>
                    <DecklistSection title='Lands'>
                        <DecklistCard count={12} mana={[]} name='Swamp' />
                        <DecklistCard mana={[]} name='Barren Moor' />
                        <DecklistCard mana={[]} name='Blast Zone' />
                        <DecklistCard mana={[]} name='Blasted Landscape' />
                        <DecklistCard mana={[]} name='Cryptic Caves' />
                        <DecklistCard
                            mana={[]}
                            name='Desert of the Glorified'
                        />
                        <DecklistCard mana={[]} name='Polluted Mire' />
                        <DecklistCard mana={[]} name='Roadside Reliquary' />
                        <DecklistCard mana={[]} name='Scene of the Crime' />
                        <DecklistCard
                            mana={[]}
                            name='Takenuma, Abandoned Mire'
                        />
                        <DecklistCard mana={[]} name='The Dross Pits' />
                        <DecklistCard mana={[]} name='Tomb Fortress' />
                        <DecklistCard mana={[]} name='Vault of Whispers' />
                        <DecklistCard
                            mana={['2', 'B']}
                            name='Midgar, City of Mako // Reactor Raid'
                        />
                    </DecklistSection>
                </div>
            </div>
            <Title title='Rationale' />
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
            <p style={{ color: 'lightgray' }}>
                If you want to make changes for your own personal decklist,
                consider the guidelines above. You can also check out the
                changelog and maybeboard to get some insight and/or inspiration.
                Some additional optional rules that have been experimented with
                include a) different mulligan rules, b) all land cards have{' '}
                {'"'}Cycling{' '}
                <img
                    src={ManaImages['2']}
                    style={{
                        height: '20pt',
                        position: 'relative',
                        top: '5px',
                        width: '20pt',
                    }}
                />
                {',"'} c) different starting life totals, and d) different total
                deck size. You can also join the Discord server to chat with
                others about decklist changes, variants, and other optional
                rules!
            </p>
            <Title title='Card Details' />
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                All the cards in the deck are shown in this section. There is a
                text version of the decklist below as well.
            </div>
            <DarkSection
                description='Basic elements of the deck: myr, reanimates, and swamps.'
                title='Core Elements'
            >
                <CardSlot cardName='Myr Servitor' count={18} />
                <CardSlot cardName='Reanimate' count={8} />
                <CardSlot cardName='Swamp' count={12} />
            </DarkSection>
            <DarkSection
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
            </DarkSection>
            <DarkSection
                description='Removal spells. These exile one creature at a time from the battlefield.'
                title='Removal'
            >
                <CardSlot cardName='Eaten Alive' />
                <CardSlot cardName='Final Vengeance' />
                <CardSlot cardName='Infernal Reckoning' />
                <CardSlot cardName='Necrotic Wound' />
                <CardSlot cardName='Worthy Cost' />
                <CardSlot cardName='Cannibalize' />
            </DarkSection>
            <DarkSection
                description='Mass removal spells. These usually kill all the myr on the battlefield, but they do not exile them.'
                title='Wraths'
            >
                <CardSlot cardName='Bile Blight' />
                <CardSlot cardName="Black Sun's Zenith" />
                <CardSlot cardName='Nausea' />
                <CardSlot cardName='Shrivel' />
                <CardSlot cardName='Mephitic Vapors' />
            </DarkSection>
            <DarkSection
                description='Graveyard removal spells. These exile cards from the graveyard.'
                title='Graveyard Hate'
            >
                <CardSlot cardName='Coffin Purge' />
                <CardSlot cardName='Cremate' />
                <CardSlot cardName='Shadowfeed' />
                <CardSlot cardName='Headstone' />
            </DarkSection>
            <DarkSection
                description='Other cards. There are a few other cards that do not fit into the categories above.'
                title='Other Stuff'
            >
                <CardSlot cardName='Cabal Therapy' />
                <CardSlot cardName='Entomb' />
                <CardSlot cardName='Inquisition of Kozilek' />
                <CardSlot cardName='Grave Consequences' />
                <CardSlot cardName='Haunting Misery' />
            </DarkSection>
            <DarkSection
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
            </DarkSection>
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
