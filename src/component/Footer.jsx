import { AppImages } from "../Asset/images/image";

function Footer() {
    const options = {
        googlePlayAppUrl: "https://play.google.com/store/apps/details?id=com.plabesk.onecall&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
        appStoreAppUrl: "https://apps.apple.com/us/app/one-call-app/id1524346082",
        baseVideoUrl: "https://www.youtube.com/embed/dZVvz_mX_Ro"
    }
    return (  
        <div className="bg-[#ddd] rounded-lg pb-[7px] font-semibold text-[13px] sm:text-[22px] text-center">
            <div className="p-[15px]">
              OneCallApp per ayein
              <br />
              Apna karobar barhayein!
            </div>
            <div className="w-[100%] inline-flex pl-[20%] md:pl-[18%] items-center justify-between">
              <div>
                <a 
                  href={options.googlePlayAppUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={AppImages.googlePlay}
                    alt=""
                    className="w-[50%]"
                  />
                </a>
              </div>
              <div>
                <a 
                  href={options.appStoreAppUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={AppImages.apple}
                    className="w-[50%]"
                  />
                </a>
              </div>
            </div>
        </div>
    );
}

export default Footer;