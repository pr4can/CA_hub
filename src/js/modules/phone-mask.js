export const phoneMask = () => {
    const phoneItems = document.querySelectorAll("[type='tel']");

    let thisInputPhone,
        listCountries = "files/masks.json",
        listResult = [],
        oldListResult = [],
        inputPhoneVal,
        inputPhoneValLenth,
        maskReplace,
        maskOpts,
        regexPhone = /[(+)\- ]/g;

    phoneItems.forEach((item) => {
        item.addEventListener("keyup", function () {
            thisInputPhone = this;
            inputPhoneVal = thisInputPhone.value;
            inputPhoneVal = inputPhoneVal.replace(/[^\d]/g, "");
            inputPhoneValLenth = inputPhoneVal.length;

            oncomplete();
            jsonFn();
        });

        Inputmask({
            mask: "+9 (999) 999-99-99",
            showMaskOnHover: false,
            clearIncomplete: false,
            inputmode: "tel",
        }).mask(item);
    });

    let jsonFn = () => {
        fetch(listCountries)
            .then((response) => response.json())
            .then((data) => {
                if (inputPhoneValLenth >= 1) {
                    oldListResult = listResult;

                    listResult = [];

                    data.forEach((val) => {
                        maskReplace = val.mask.replace(/[^\d]/g, "");

                        if (maskReplace === inputPhoneVal) {
                            listResult.push(val.mask.replace(/[0-9]/g, "#"));
                        }
                    });

                    if (listResult.length === 0) {
                        data.forEach((val) => {
                            maskReplace = val.mask.replace(/[^\d]/g, "");
                            maskReplace = maskReplace.slice(
                                0,
                                inputPhoneValLenth
                            );

                            if (maskReplace === inputPhoneVal) {
                                listResult.push(
                                    val.mask.replace(/[0-9]/g, "#")
                                );
                            }
                        });

                        if (listResult.length === 0) {
                            for (var i = inputPhoneValLenth; i >= 1; i--) {
                                data.forEach((val) => {
                                    maskReplace = val.mask.replace(
                                        /[^\d]/g,
                                        ""
                                    );
                                    inputPhoneVal = inputPhoneVal.slice(0, i);

                                    if (maskReplace === inputPhoneVal) {
                                        listResult.push(
                                            val.mask.replace(/[0-9]/g, "#")
                                        );
                                    }
                                });
                                if (listResult.length > 0) break;
                            }
                        }
                    }
                }

                if (listResult.length === 0) {
                    listResult = [
                        "+9999999",
                        "+99999999",
                        "+999999999",
                        "+9999999999",
                        "+99999999999",
                        "+999999999999",
                        "+9999999999999",
                        "+99999999999999",
                        "+999999999999999",
                        "+9999999999999999",
                    ];
                } else {
                    for (var x = 0; x < listResult.length; x++) {
                        listResult[x] = listResult[x].replaceAll("#", "9");
                    }
                }

                maskOpts = {
                    mask: listResult,
                    showMaskOnHover: false,
                    clearIncomplete: false,
                    inputmode: "tel",
                };

                thisInputPhone.setAttribute(
                    "placeholder",
                    listResult[0].replace(/[0-9]/g, "_")
                );

                if (
                    JSON.stringify(oldListResult) !== JSON.stringify(listResult)
                ) {
                    Inputmask(maskOpts).mask(thisInputPhone);
                }

                Inputmask(maskOpts).mask(thisInputPhone);
            });
    };

    let oncomplete = () => {
        let thisVal = thisInputPhone.value,
            thisValLength = thisVal.replace(regexPhone, "");
        thisValLength = thisValLength.length;

        if (inputPhoneValLenth !== thisValLength) {
            thisInputPhone.classList.add("input--error");
        } else {
            thisInputPhone.classList.remove("input--error");
        }
    };
};
