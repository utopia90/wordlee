import React from 'react'
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    InstapaperShareButton,
    InstapaperIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";

export default function SocialMedia() {
    return (
        <div style={{paddingTop: 10}}>
            <EmailShareButton size={32} round={true} title="test title"
                via="ustreak"
                hashtags={["testhash"]}
                related={["related"]}
                url="https://www.npmjs.com/package/react-copy-to-clipboard">
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <TwitterShareButton title="test title"
                via="ustreak"
                hashtags={["testhash"]}
                related={["related"]}
                url="https://www.npmjs.com/package/react-copy-to-clipboard">
                <TwitterIcon size={32} round={true} title="test title"
                    via="ustreak"
                    hashtags={["testhash"]}
                    related={["related"]}
                    url="https://www.npmjs.com/package/react-copy-to-clipboard" />
            </TwitterShareButton>
            <InstapaperShareButton>
                <InstapaperIcon size={32} round={true} title="test title"
                    via="ustreak"
                    hashtags={["testhash"]}
                    related={["related"]}
                    url="https://www.npmjs.com/package/react-copy-to-clipboard" />
            </InstapaperShareButton>
            <RedditShareButton title="test title"
                via="ustreak"
                hashtags={["testhash"]}
                related={["related"]}
                url="https://www.npmjs.com/package/react-copy-to-clipboard">
                <RedditIcon size={32} round={true} />

            </RedditShareButton>
            <FacebookShareButton title="test title"
                via="ustreak"
                hashtags={["testhash"]}
                related={["related"]}
                url="https://www.npmjs.com/package/react-copy-to-clipboard">
                <FacebookIcon size={32} round={true} />

            </FacebookShareButton>
            <PinterestShareButton title="test title"
                via="ustreak"
                hashtags={["testhash"]}
                related={["related"]}
                url="https://www.npmjs.com/package/react-copy-to-clipboard">
                <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
            <WhatsappShareButton title="test title"
                via="ustreak"
                hashtags={["testhash"]}
                related={["related"]}
                url="https://www.npmjs.com/package/react-copy-to-clipboard">
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
        </div>
    )
}
