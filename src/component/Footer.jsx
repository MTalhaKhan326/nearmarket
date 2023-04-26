import { AppImages } from "../Asset/images/image";

function Footer() {
    const options = {
        googlePlayAppUrl: "https://play.google.com/store/apps/details?id=com.plabesk.onecall&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
        appStoreAppUrl: "https://apps.apple.com/us/app/one-call-app/id1524346082",
        baseVideoUrl: "https://www.youtube.com/embed/dZVvz_mX_Ro"
    }
    return (
      <>
        <div className="hidden md:block">
          <div className="bg-[#ddd] rounded-lg pb-[7px] font-bold text-[16px] text-center">
            <div className="p-[15px]">
              OneCallApp per ayein
              <br />
              Apna karobar barhayein!
            </div>
            <div className="w-[100%] inline-flex  justify-between pl-[25%] ">
              <div>
                <a
                  href={options.googlePlayAppUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={AppImages.googlePlay}
                    alt=""
                    className="w-[40%] md:w-[29%]"
                  />
                </a>
              </div>
              <div>
                <a
                  href={options.appStoreAppUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={AppImages.apple} className="w-[40%] md:w-[29%]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="bg-[#ddd] rounded-lg pb-[7px] font-bold px-2 text-[13px] justify-center items-center w-full m-0 p-0">
            <div className="w-[100%] flex flex-row py-6">
              <div className="w-[25%] flex justify-center items-center">
                <a
                  href={options.googlePlayAppUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={AppImages.googlePlay} alt="" />
                </a>
              </div>
              <div className="w-[50%] flex justify-center items-center text-center ">
                OneCallApp per ayein
                <br />
                Apna karobar barhayein!
              </div>
              <div className="w-[25%] flex justify-center items-center">
                <a
                  href={options.appStoreAppUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={AppImages.apple} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Footer;