import React from 'react';
import './Article.css';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

function Article(props)
{
    var items = [
        {
            name: "The Prophet",
            description: "The Prophet ﷺ  is undeniably a figure for Muslims to admire and look up to. Whether as a husband or a traveler or a parent, we often try to emulate his words and deeds in our own lives. In the Quran, Allah has described Prophet Muhammad ﷺ as the role model we should emulate and follow in every aspect of life: ”There has certainly been for you in the Messenger of Allah an excellent pattern for anyone whose hope is in Allah and the Last Day and [who] remembers Allah often”. Qur’an (33:21)"
        },
        {
            name: "Virtues of marriage and advice to be a good husband",
            description: " Prophet Muhammad ﷺ was a husband even before declaring himself a prophet. Prophet Muhammed  ﷺ  said, 'Marriage is my precept and my practice. Those who do not follow my practice are not of me.' He ﷺ  also said, 'When a man has married, he has completed one half of his religion.' Prophet Muhammad ﷺ said, 'Best among you is one who is best to his wife, and I am best among you in my dealings with my wives.'"
        },
        {
            name: "Marriage played a central role during His ﷺ life",
            description: "Allah decreeded marriage as a means for Him ﷺ to gain financial stability (via his wife Bibi Khadjiah’s r.a. ample wealth); to raise his young children (by marrying Bibi Saudah r.a. after Bibi Khadijah’s RA passing away); to form important liaisons (e.g. by marrying Bibi Umm Habibah r.a. and Bibi Safiyya r.a.); to establish Islamic laws (e.g. marrying his cousin Bibi Zainab r.a. which abolished an Arab custom that prohibited marrying an adopted son’s divorcee); to abolish slavery (by mararying Bibi Maria r.a. and Bibi Rihana r.a.) and to spread the message of Islam far and wide (e.g. his wife Bibi A’ishah r.a.) who propagated over 2000 narrations, and excelled in jurisprudence, especially those related to feminine jurisprudential clauses. The Prophet's ﷺ home life was, maybe contrary to His ﷺ position as such an esteemed leader, was one of humility and simpleness. Reported Aisha r.a.: 'He ﷺ himself milked His ﷺ  goats, and did all His ﷺ work himself'. [Ash-Shama'il Al-Muhammadiyah] "
        },
        {
            name: "Teaching treatment of women",
            description: " Hazrat Anas (may Allah be pleased with him) reported that once the Messenger of Allah ﷺ was travelling and a young boy called Anjasha was singing in order to drive the camels [which were carrying the women]. Therefore, the Messenger of Allah ﷺ said, “Drive the camels gently, Oh Anjasha. They are carrying glass vessels.” [Bukhari and Muslim]. Imam An-Nawawi said, 'This means that He ﷺ ordered the boy to be gentle with them (the women),’ that is, be as gentle as if they were glass vessels. The scholars said these women were called glass vessels due to them getting easily exhausted. They were described as glass vessels to illustrate their weakness and how they comparing metaphorically with the glasses which could easily be broken’' [Imam An-Nawawi’s explanation of Muslim]"
        },
        {
            name: "Overall treatment of wives",
            description: " Prophet Muhammed ﷺ chose best names for his wives. The Messenger of Allah ﷺ did not harm any of his wives or hit any of them or was rough towards them.  He ﷺ said Treat women well. They are created from a curved rib and the most curved portion of the rib is its upper portion. If you try to straighten it, it will break, but if you leave it as it is, it will remain curved. [Bukhari] Laugh, be supportive and gentle, befriend with your wife, and be very polite with her, as this is the example of the Prophet ﷺ . We need to set aside some of your time for your wives to sit and talk with her, and try to entertain her by going out for a walk together or by talking to her nicely, as the Messenger of Allah ﷺ used to do with His ﷺ  wives. We hope that these lessons from the life of the Prophet ﷺ help you to strengthen your own marriage and inspire and remind you to continue to treat your significant others in the best possible way that you can. "
        }
    ]

    return (
        <Carousel
        navButtonsAlwaysVisible='true'
        interval='100000'
        timeout='100'
        className='MyArticle'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}

export default Article;