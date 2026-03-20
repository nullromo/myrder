import { EmphasisText } from '../util/emphasisText';
import { TabContent } from './tabContent';

const Title = (props: { readonly title: string }) => {
    return (
        <div style={{ alignItems: 'center', display: 'flex' }}>
            <hr style={{ flexGrow: 1, margin: '0 20px' }} />
            <div
                style={{
                    color: 'black',
                    fontSize: '30pt',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                {props.title}
            </div>
            <hr style={{ flexGrow: 1, margin: '0 20px' }} />
        </div>
    );
};

export const DecklistTab = () => {
    //Decklist content goes here. It should show off the cards in the deck and explain some of the synergy.
    return (
        <TabContent>
            <Title title='Decklist Rationale' />
            <p>
                This list was created using the following guiding principles.*
                <ol>
                    <li>
                        <EmphasisText front='black' text='(Mandatory)' /> There
                        can be no creatures nor creature tokens other than{' '}
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
                        Draw spells should always come with a game-state
                        condition <em>(other than just losing life)</em>.
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
                    *These are guiding principles, not hard rules. There may be
                    some small bends or breaks.
                </em>
            </p>
        </TabContent>
    );
};
