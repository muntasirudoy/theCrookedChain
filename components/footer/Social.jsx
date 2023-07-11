import {dsnCN} from "../../hooks/helper";


const socialContent = [
    {name: "Instagram.", href: "https://www.instagram.com/thecrookedchain/"},
    {name: "Facebook.", href: "https://www.facebook.com/thecrookedchain"},
    {name: "Linkedin.", href: "https://www.linkedin.com/company/crookedchain/"},
    {name: "Ticktok.", href: "https://www.tiktok.com/@thecrookedchain"},
];


function Social({className, ...restProps}) {
    return (
        <div className={dsnCN("footer-social p-relative", className)} {...restProps}>
            <ul>
                {socialContent && socialContent.map(($item, $number) =>
                    <li className="over-hidden" key={$number}>
                        <a href={$item.href} data-dsn="parallax" target="_blank" rel="nofollow">{$item.name}</a>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default Social;