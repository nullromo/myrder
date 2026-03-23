import { CardSlot } from '../layout/cardSlot';
import { DarkSection } from '../layout/darkSection';
import { Title } from '../layout/title';
import { CardName } from '../util/emphasisText';
import { TabContent } from './tabContent';

const CardSection = (
    props: { readonly description: string } & React.PropsWithChildren,
) => {
    return (
        <DarkSection description={props.description}>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    paddingBottom: '20px',
                    rowGap: '10px',
                    width: '100%',
                }}
            >
                {props.children}
            </div>
        </DarkSection>
    );
};

export const ChangelogTab = () => {
    return (
        <TabContent>
            <Title title='Changelog' />
            <div
                style={{
                    margin: '0 0 30px 0',
                    textAlign: 'center',
                    textWrap: 'balance',
                }}
            >
                This section showcases the history of the decklist and explains
                each change that has occurred.
            </div>
            <DarkSection description='March 2026'>
                <div style={{ textAlign: 'left', width: '95%' }}>
                    <ul>
                        <li>
                            Created Myrder website! Deployed on myrder.com in
                            anticipation of advertising the format at MagicCon
                            Vegas 2026 in May.
                        </li>
                    </ul>
                </div>
            </DarkSection>
            <DarkSection description='2 December 2025'>
                <div style={{ textAlign: 'left', width: '95%' }}>
                    <ul>
                        <li>
                            Removed <CardName name='Cling to Dust' />. After
                            playing 1 game with this card, it was very obvious
                            that it {"shouldn't"} be in the decklist. It is very
                            easy to fill up the graveyard in this format, so you
                            can pay the escape cost 2-5 times over the course of
                            the game. {"It's"} also an instant, making it very
                            hard to remove with graveyard hate. It draws cards,
                            it exiles stuff, it gains life, {"it's"} nuts.
                        </li>
                        <li>
                            Added <CardName name='Nasty End' /> to provide more
                            card draw, which I had previously cut down a little
                            and was worried about.
                        </li>
                    </ul>
                </div>
            </DarkSection>
            <DarkSection description='20 November 2025'>
                <div style={{ textAlign: 'left', width: '95%' }}>
                    <ul>
                        <li>
                            Swapped <CardName name='Poison the Waters' /> out
                            for <CardName name='Bile Blight' /> because having
                            an instant speed wrath seemed cool. You can get
                            blown out with it though, so it might not play very
                            well.
                        </li>
                        <li>
                            Swapped one <CardName name='Swamp' /> out for{' '}
                            <CardName name='Blasted Landscape' /> to reduce
                            flood.
                        </li>
                        <li>
                            Removed <CardName name='Agonizing Memories' /> for
                            being too clunky.
                        </li>
                        <li>
                            Removed <CardName name='Atrocious Experiment' /> for
                            violating the {'"no unconditional card draw"'} rule.
                        </li>
                        <li>
                            Removed 1 <CardName name='Swamp' /> because the
                            average mana cost of the deck decreased and it felt
                            a little land-heavy.
                        </li>
                        <li>
                            Removed <CardName name='Bankrupt in Blood' /> for
                            being too clunky.
                        </li>
                        <li>
                            Added <CardName name='Inquisition of Kozilek' />{' '}
                            because it seems interesting. I really prefer the
                            7th edition <CardName name='Duress' /> artwork, and{' '}
                            {"they're"} nearly the same card, but I wanted to
                            open up the line of discarding a myr to exile or
                            reanimate it.
                        </li>
                        <li>
                            Added a small <CardName name='Entomb' /> package (
                            <CardName name='Coffin Purge' /> and{' '}
                            <CardName name='Cling to Dust' />
                            ). I worry that{' '}
                            <CardName
                                name='Cling to
                            Dust'
                            />{' '}
                            is too powerful because once you have it in your
                            graveyard you can get a lot of uses out of it.{' '}
                            {"It's"} there as a test for now.
                        </li>
                        <li>
                            Keeping an eye on{' '}
                            <CardName name='Haunting Misery' />. Some players
                            found it to be an un-fun way for the game to end. It
                            pretty much does nothing until you just win with it.
                            I expect that experienced players can play around it
                            more easily, but it may be worth taking out just to
                            remove the {`"oops, you're dead"`} aspect.
                        </li>
                        <li>
                            Worried I went a little too light on the draw
                            spells, but we will see over time.
                        </li>
                    </ul>
                </div>
            </DarkSection>
            <DarkSection description='5 November 2025'>
                <div style={{ textAlign: 'left', width: '95%' }}>
                    <ul>
                        <li>Initial decklist created.</li>
                    </ul>
                </div>
            </DarkSection>
            <Title title='Maybeboard' />
            <div
                style={{
                    margin: '0 0 30px 0',
                    textAlign: 'center',
                    textWrap: 'balance',
                }}
            >
                This section contains cards that have not been included, but
                that could be in the future. Each section has an explanation of
                why the cards have not been included.
            </div>
            <CardSection description='Extra spells that exile cards from the graveyard. It would be bad to include too many of these because exiling all the myr makes it hard for the game to actually end.'>
                <CardSlot cardName='Ebony Charm' />
                <CardSlot cardName='Fade from Memory' />
                <CardSlot cardName='Rapid Decay' />
                <CardSlot cardName='Scarab Feast' />
            </CardSection>
            <CardSection description='Artifacts that exile cards from the graveyard. Same rationale as above, and including zero of these makes the decklist a little cleaner with a "no artifacts" rule. '>
                <CardSlot cardName='Lantern of the Lost' />
                <CardSlot cardName='Nihil Spellbomb' />
                <CardSlot cardName="Jack-o'-Lantern" />
                <CardSlot cardName='Sentinel Totem' />
                <CardSlot cardName='Thran Foundry' />
                <CardSlot cardName="Tormod's Crypt" />
                <CardSlot cardName='Soul-Guide Lantern' />
            </CardSection>
            <CardSection description='Pretty cool, but just a little too weak.'>
                <CardSlot cardName='Dredge' />
            </CardSection>
            <CardSection description="Hand disruption. These are fair 1-for-1s, but having too many in the list wouldn't be good. Disrupting someone's only source of draw can snowball the game.">
                <CardSlot cardName="Mire's Toll" />
                <CardSlot cardName='Dread Fugue' />
                <CardSlot cardName='Duress' />
            </CardSection>
            <CardSection description='Extra (less-powerful) variations of the card draw spells that are in the list already.'>
                <CardSlot cardName='Skulltap' />
                <CardSlot cardName='Merciless Resolve' />
            </CardSection>
            <CardSection description='An extra wrath. This could be added if the deck needed another mass removal spell.'>
                <CardSlot cardName='Poison the Waters' />
            </CardSection>
            <Title title='Exclusions' />
            <div
                style={{
                    margin: '0 0 30px 0',
                    textAlign: 'center',
                    textWrap: 'balance',
                }}
            >
                This section contains cards that have either been intentionally
                excluded or removed from the deck. Each card has an explanation
                of why it was removed or excluded.
            </div>
            <CardSection description='Unconditional draw spells. These spells let you acrue card advantage without meeting any in-game condition.'>
                <CardSlot cardName='Sign in Blood' />
                <CardSlot cardName="Night's Whisper" />
                <CardSlot cardName='Corpse Churn' />
                <CardSlot cardName='Foreboding Fruit' />
                <CardSlot cardName='Infernal Contract' />
                <CardSlot cardName='Cruel Bargain' />
                <CardSlot cardName='Atrocious Experiment' removed={true} />
            </CardSection>
            <CardSection description='Neat spell, but too clunky to use.'>
                <CardSlot cardName="Titan's Presence" />
            </CardSection>
            <CardSection description="Too tricky to use and doesn't provide enough extra wow factor over other similar cards.">
                <CardSlot cardName='Bankrupt in Blood' removed={true} />
            </CardSection>
            <CardSection description='Kinda cool to sacrifice, but colorless mana hurts a lot when most of the spells cost 1-2 mana and are black.'>
                <CardSlot cardName='Darksteel Citadel' />
            </CardSection>
            <CardSection description="Neat forms of card advantage that can even pick up cycling/spell lands, but the spells in the deck are so black mana intensive that these don't really work and they feel bad to draw.">
                <CardSlot cardName='Guildless Commons' />
                <CardSlot cardName='Arid Archway' />
            </CardSection>
            <CardSection description="Manipulates the top of the deck and provides card advantage, but costs 4 mana so it doesn't play well.">
                <CardSlot cardName='Agonizing Memories' removed={true} />
            </CardSection>
            <CardSection description='Extremely powerful repeatable removal, card draw, life gain, etc. This card does everything and it does way too much of it.'>
                <CardSlot cardName='Cling to Dust' removed={true} />
            </CardSection>
            <CardSection description="Non-exile targeted removal, but it's repeatable. Since the escape cost is only 2 cards, this one would probably get out of hand. After seeing how Cling to Dust played, this one would likely be too unfair.">
                <CardSlot cardName="Mogis's Favor" />
            </CardSection>
        </TabContent>
    );
};
