import {dsnCN} from "../../hooks/helper";
import DsnGrid, {DsnGridProps} from "../../layout/DsnGrid";
import Image from "next/image";


const data = [
    {src: "/img/clients/358-3589718_shopify-logo-white-transparent.webp"},
    {src: "/img/clients/FF-no-background.webp"},
    {src: "/img/clients/SuperBotanic_Logo.webp"},
    {src: "/img/clients/trnso gold logo.webp"},
    {src: "/img/clients/trnso logo.webp"},
    {src: "/img/clients/Vivobarefoor colour white.webp"},
    {src: "/img/clients/FF-no-background.webp"},
    {src: "/img/clients/SuperBotanic_Logo.webp"},
];


function BrandClient({className, ...retsProps}: DsnGridProps) {

    return (
        <DsnGrid className={dsnCN("brand-client wrapper-client", className)} {...retsProps}>


                {data && data.map(($item, $index) =>
                    <div className="logo-box" key={$index}>
                        <div className="logo-box-inner p-relative">
                            <Image src={$item?.src} alt={""} width={180} height={54}/>
                        </div>
                    </div>
                )}


        </DsnGrid>
    );
}

export default BrandClient;