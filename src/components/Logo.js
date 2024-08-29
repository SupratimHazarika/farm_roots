import React from 'react'

const Logo = ({w, h}) => {
    return (
        // <svg version="1.1" viewBox="0 0 1899 2048" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
        //     <path transform="translate(0)" d="m0 0h1899v2048h-1899z" fill="#FEFDF1" />
        //     <path transform="translate(1480,869)" d="m0 0h9l12 2 11 5 11 8 7 6 8 10 8 14 5 15v21l-7 47-8 55-16 92-8 53-16 87-8 47-13 63-10 54-12 53-12 59-11 43-12 54-8 30-7 27-12 48-11 40-8 30-15 52-6 22-8 22-8 16-7 11-9 10-11 9-15 9-15 4-78 10-59 7-30 4-23 2-58 2-54 1h-86l-92-2-42-2-20-2-59-7-37-4-58-7-21-4-16-8-16-13-8-9-8-13-7-14-11-33-10-37-14-50-11-43-18-71-15-61-12-53-11-46-9-43-15-70-24-122-16-88-8-45-9-55-13-76-6-43-5-33-2-17v-9l4-16 7-14 8-10 7-7 14-10 11-5 4-1h23l37 4 70 10 38 4 129 10 74 5 72 4 45 4 19 3 13 5 11 7 8 8 10 15 6 19 1 16-1 202-1 21-7 8-10 8-15 10-20 11-23 10-15 6-45 15-17 7-36 12-16 8-22 12-14 9-13 12-9 10-8 14-5 11-4 13-4 8-1 9 2 4 7 1 6-3 8-16 7-11 9-12 7-7 15-11 16-10 7-1v10l-10 33-3 19-1 9v12l2 19 7 25 3 12 3 6 4 1h8l3-2h4l-3-16-3-15-1-13v-11l2-29 1-3 1-11 3-15 5-12 3-7 6-9 7-9 6-8 11-8 15-7 25-11 26-8 18-6 25-12 20-10 13-8 2 2v143l-1 203-3 24-6 26-8 23-8 15-10 14-11 12-8 7-14 11-14 8-20 12-31 16-15 9-16 8-19 11-11 7-24 16-10 8-11 9-11 12-8 11-6 9-5 11-3 9-2 14 4 9 2 1h9l3-1 2-18 4-11 8-13 14-12 13-9 15-8 17-8h2v7l-6 21-4 27 1 10 2 4 7 2h6l4-3 3-28 7-27 3-4 2-8 9-10 4-6 13-13 13-9 22-14 17-9 20-13 10-6 10-7 8-7 9-7 9-10 10-13 8-14 9-21 7-21 4-23 5 1 37 14 27 11 25 9 17 9 10 8 7 7 8 13 8 5 8 1 4-2-2-9-8-21-8-12-4-5-13-10-16-9-22-10-25-10-16-6-19-9-9-7-10-9-1-13v-223l2-3 11 7 21 12 23 11 50 20 36 12 62 21 23 10 23 11 18 12 16 12 10 9 10 13 8 14 7 11 3 6 4 3 8 1 5-3-1-10-11-33-10-18-11-12-10-11-3-4v-2l9-1h21l27 2 24 4 21 6 10 1-2-11-4-5-12-7-25-10-20-6-17-3h-42l-14 2-9 3-5 4-10-3-15-6-17-6-24-9-69-23-39-15-23-11-21-12-13-9-15-14-8-7-1-2-1-47-1-276 2-25 5-15 4-5 3-5 10-9 12-6 16-3 53-4 133-8 84-6 76-6 37-4 77-11z" fill="#68411C" />
        //     <path transform="translate(1231,421)" d="m0 0h48l31 4 17 3 10 5 4 7 7 28 4 23 1 12v16l-2 24-5 26-8 29-10 30-14 29-10 17-12 18-10 13-11 13-11 12-13 13-11 9-15 12-15 10-25 14-17 8-20 7-33 11-34 6-25 2h-26l-25-2-16-3-15-4-6-4-4-9-6-33-2-17v-39l4-31 6-32 7-21 12-28 12-25 13-21 12-16 11-14 26-26 17-13 18-13 24-14 25-12 22-8 24-8 29-6z" fill="#5C983C" />
        //     <path transform="translate(576,420)" d="m0 0h23l24 2 31 5 22 6 37 15 25 12 27 16 16 12 11 9 23 23 7 8 10 12 20 30 10 18 10 21 11 29 6 21 6 32 3 26v29l-3 24-5 26-4 12-5 4-11 3-28 5-17 2-27 1-26-2-18-3-24-6-21-7-28-11-27-14-17-11-13-9-13-10-10-9-8-7-15-15-9-11-11-14-11-17-10-17-12-23-9-23-8-26-5-22-4-26-2-23v-14l3-30 4-23 4-13 7-6 13-5 13-3z" fill="#5C983C" />
        //     <path transform="translate(923,38)" d="m0 0h7l14 11 11 8 11 9 11 10 8 7 14 15 9 11 10 13 11 17 9 15 10 19 13 32 8 24 5 23 3 34v43l-3 24-6 25-11 33-12 28-13 23-11 16-14 18-11 14-24 24-11 9-9 7-14 9-12 8-5-2-12-7-18-13-13-10-13-12-18-18-13-17-12-17-9-15-12-22-11-28-10-31-5-26-2-18v-51l3-32 4-21 7-21 10-26 10-21 10-17 10-15 13-18 12-14 14-15 14-13 11-9 12-9 18-10z" fill="#5C983C" />
        //     <path transform="translate(906,1250)" d="m0 0 2 2v143l-1 203-3 24-6 26h-1l1-12 2-13v-15l1-6v-44l-1-14v-7l1-7-1-8 1-18-1-7 1-14-1-9 1-20-1-4v-37l1-8v-28l1-10-1-53-6-11-1-3-5-1-4-8-20 2-8 3-3 1-11 1-9 3-13 3-5 2-7 1-8 6-10 9-6 7-2 3-2 6-6 2-4 1-1 2-8-2 1 6v3l-2 11-5 3-3 9-7 3-10 10h-2l-4 35 2 21 1 23-2 4-6 3-5-25-1-13v-11l2-29 1-3 1-11 3-15 5-12 3-7 6-9 7-9 6-8 11-8 15-7 25-11 26-8 18-6 25-12 20-10z" fill="#7B5026" />
        //     <path transform="translate(1480,869)" d="m0 0h9l12 2 11 5 11 8-2 3-4-3 1 1-1 2-4-2h-3l-4-4-8-3h-7l-9 2h-4l-1 3-25 3-10 2h-26l-1 2-4 1h-12v-2l-8 1v2l-5 1-1-1h-21l-8 1-15 1-8 2h-8l-16-3-6 1-17 1-4 1-21 1-11 2h-18l-67 4-101 8-50 2-25 2-5 4-2 1 1 2h-2v2l-9 3-3 9h-2l-2 5-2 11v19l-3 10-3 5-2 6-5 12-1 17-1 20v14l-1 23v23l-1 7-2 26-1 10 1 6-1 18-1 60v36l1 8 1 23-6 7h-1l-1-47-1-276 2-25 5-15 4-5 3-5 10-9 12-6 16-3 53-4 133-8 84-6 76-6 37-4 77-11z" fill="#7B4E26" />
        //     <path transform="translate(412,1543)" d="m0 0 1 4 3 8 2 10 3 9 4 18 4 16 5 24 9 37 2 7 4 17 2 5 7 31 10 37 6 22 1 8h2l2 11 1 5 4 15v3l2 1 4 14 2 6 3 12 3 9 4 9 2 5 3 13 3 6 3 16 3 6v2l2 1 3 5 4 8v3h2l7 8 8 4 13 9 24 6h5l7 3 9 1 9 2 7 2 13 1 25 4 11 2 2 1 14 2 13 2 14 2 36 2h10l10 2 14 1 17 2 18 4 16 1 38 1h27l59 1h57l34-1 22-1h8l9-3 18-1 16-1 12 1 10-1h9v1l-37 5-23 2-58 2-54 1h-86l-92-2-42-2-20-2-59-7-37-4-58-7-21-4-16-8-16-13-8-9-8-13-7-14-11-33-10-37-14-50-10-39v-8l-5-19-2-10-1-4-5-17-4-20-2-11-3-6-3-12-3-18-2-10-1-7-3-8-2-9-2-7-2-9-5-21-2-9v-6l-2-1-1-13z" fill="#775728" />
        //     <path transform="translate(937,1348)" d="m0 0 9 5 13 8 27 14 44 18 25 9 36 12 41 14 19 7 36 17 18 12 16 12 10 9 4 6h-3l-1-2v6l-4-1v-4h-2v-2l-5-1-8-4-3-2v-2h-2l-4-4v-2l-5-1-7-4v-3l-5-2-3-2v-2l-9-3-4-1v-2l-6-2-9-5-10-3-14-6-12-2v-2h-2l-1 2v-2l-10-1-9-5-6-3-9-2-16-5-13-5-6-2-1-2-6 1-7-3-1-3-8-1-5-2-6-2-7-1-16-8-5-3-8-3v-2l-10-3-8 3-8 8-4 3h-2v97l-1 17 1 5-1 18 1 25v25l-1 5 5 2 12 9 8 4 8 2 16 6 16 5 4 2 7 5 9 3 9 4 8 4 13 10 4 4 2 8-6-2-12-7-17-9-26-11-29-11-19-9-9-7-10-9-1-13v-223z" fill="#785628" />
        //     <path transform="translate(933,1628)" d="m0 0 5 1 37 14 27 11 25 9 17 9 10 8 7 7 8 13 8 5 8 1 6-2-5 7h-9l-6-4v-2h-5-3l-3-4-2-3-2-1v-2l-5-2-5-5-9-6-4-4v-2h-3v-2l-8-1v-2l-25-5h-10l-14-3-13-2-9-4-17-2-3 5-1 7-3 8-3 13-4 9-4 12-3 1v2l-6 4-4 8-8 7-5 7h-2l-2 4-9 10-5 6-5 3-2 3-7 2-1 3-11 2-5 5-5 4-13 10-6 5-8 1-1 3h-2v2l-6 4-3 1-1 3h-2l-2 4-4 3h-2l-1 3-11 2-2 6-8 11-4 3-5 12-2 1-4-1v6l-2 3-1 11-2 5 3 5-3 9-1 8h-6l-4 1 3-3 3-28 7-27 3-4 2-8 9-10 4-6 13-13 13-9 22-14 17-9 20-13 10-6 10-7 8-7 9-7 9-10 10-13 8-14 9-21 7-21z" fill="#7A5127" />
        //     <path transform="translate(352,870)" d="m0 0h23v1h-9v2l4 1v2l2 4-2 3-12 2-13 2-8 4-6 1-3-1-2 8v8l-5 5-3 1 3 6 5 3 1 9-3 2-2 6-5 5v11h-2v22l2 7 1 21 2 5v26l1 14 6 36 4 20 2 18 3 16 3 18 1 10 3 18-2 4-4-7v-7l-1-1-2 3-11-67-13-76-6-43-5-33-2-17v-9l4-16 7-14 8-10 7-7 14-10 11-5z" fill="#7A5127" />
        //     <path transform="translate(978,1329)" d="m0 0 7 1 11 6 13 5 10 4 8 1 18 6 14 7 15 4 6 1 5 1 14 4 7 3 8 2 8 3v2l9 3 17 5 10 3 20 7 17 2 13 1 10 3 7 3 44-1 5 1 10 3v2l3 1 1 3-26-5h-42l-14 2-9 3-5 4-10-3-15-6-17-6-24-9-69-23-39-15-23-11-18-10 1-2-3-3z" fill="#7A5026" />
        //     <path transform="translate(1480,869)" d="m0 0h9l12 2 11 5 11 8-2 3-4-3 1 1-1 2-4-2h-3l-4-4-8-3h-7l-9 2h-4l-1 3-25 3-10 2h-26l-1 2-4 1h-12v-2l-8 1v2l-5 1-1-1h-21l-8 1-15 1-8 2h-8l-16-3-6 1-17 1-4 1h-34l-114 8-92 6-53 3h-9v-1l31-3 78-5 53-3 75-5 105-8 41-4 84-12z" fill="#795327" />
        //     <path transform="translate(702,1334)" d="m0 0h4v10l-10 33-3 19-1 9v22h-2l-2-18v-7h-3l-2-5-3-1-14 1-2 4-2 1-12-1-2 4-6-1-2-1-4 1 8-15 5-10 12-16 7-7 15-11 16-10z" fill="#7A5227" />
        //     <path transform="translate(1239,1439)" d="m0 0h21l27 2 24 4 21 6 10 1v-6l2 2v5l-7 2-1 2-3 1-13-1-5-2-8-1-4-1-12 3-4 5-6 2-6 11-1 9 1 9 2 4v7l3 10v4h2l1 5-1 4-3-1-1-5v11l-2-1-1-10-11-33-10-18-11-12-10-11-3-4v-2z" fill="#795327" />
        //     <path transform="translate(724,1830)" d="m0 0h2v7l-6 21-4 27 1 12-6 1-1-4 4-3-1-8h-3l-1-5-5-4-6-3h-12l-1 3h-2v2l-8 3-5 9-1 4-5 5-4 7-7 6-2-1 2-18 4-11 8-13 14-12 13-9 15-8z" fill="#7A5227" />
        //     <path transform="translate(842,1721)" d="m0 0 6 1-5 5-11 7-27 16-31 16-15 9-16 8-19 11-11 7-24 16-10 8-11 9-11 12-6 9-2-4 4-9 10-10h2v-2l7-1 2-5 8-7 3-1v-2l8-7 12-7 8-7 9-6 10-7 9-4 7-4 16-8 5-3 11-7 12-7 10-3 6-2 8-7 5-2v-3l6-1v-2l5-3 4-2z" fill="#795327" />
        //     <path transform="translate(943,1582)" d="m0 0 1 2 5 2 12 9 8 4 8 2 16 6 16 5 4 2 7 5 9 3 9 4 8 4 13 10 4 4 2 8-6-2-12-7-17-9-26-11-29-11-19-9-9-7-9-8v-2h4z" fill="#795127" />
        //     <path transform="translate(894,940)" d="m0 0 4 4 4 8 5 16 1 16-1 202-1 21-7 8-4 3-1-7-1-5 5-5 2-1 1-3 1-18 1-65v-125l-2-27-1-7-2-1-1-4-2-2v-2l-2-5z" fill="#7A5126" />
        //     <path transform="translate(861,1236)" d="m0 0 4 2-16 8-20 9-18 7-22 7-18 6-17 7-36 12-11 5h-2l2-6 2-3 6-3h3v-2l15-5 10 1v2l3-3h5l8-7h2v-2h2v-2l10-4 12-3 17-5 14-4 13-4h2v-2l3-3 12-5 10-1 3-1 2 1z" fill="#775729" />
        //     <path transform="translate(906,1250)" d="m0 0 2 2v143l-1 203-3 24h-1v-13l1-25 1-245v-26l-1-34v-18h-2l-1-3-8 1 3-3z" fill="#5C993D" />
        //     <path transform="translate(341,1193)" d="m0 0 3 1 5 22 4 22 1 4 5 30 2 9v8l3 8 3 20v5l-5-5v-6l-1-5h-2l-1 4-16-88-3-16 1-9z" fill="#785026" />
        //     <path transform="translate(352,870)" d="m0 0h23v1h-9v2l4 1v2l2 4-2 3-12 2-13 2-8 4-10 1h-2l-2 2-4 1 1-4 7-8 10-7 11-5z" fill="#7A4F26" />
        //     <path transform="translate(942,939)" d="m0 0h1v9l-3 6v19l-2 6v323h-1l-1-47-1-276 2-25z" fill="#5C993D" />
        //     <path transform="translate(411,1557)" d="m0 0 4 1v9l2 7 5 20 2 9 2 7 4 16 1 1 2 15 1 4 3 16 4 15 2 5 5 23 5 21 2 3 1 7 5 22 1 7h-2l-18-71-15-61-12-53-4-16z" fill="#674F21" />
        //     <path transform="translate(552,682)" d="m0 0 4 4 12 17 10 11 7 8 18 18 11 9 13 10 18 12 21 12 21 10 41 15 26 7 5 2v1l-10-1-26-7-30-11-18-8-21-11-17-11-13-9-13-10-10-9-8-7-15-15-9-11-11-14-6-9z" fill="#665021" />
        //     <path transform="translate(1269,892)" d="m0 0h14v1l-35 3-114 8-92 6-53 3h-9v-1l31-3 78-5 53-3 75-5z" fill="#5C993D" />
        //     <path transform="translate(366,1324)" d="m0 0 2 1 2 6 2 11 3 13 3 16 4 17 2 17 2 10 3 12 1 10 2 5-1 4h-3l-3-16-2-13-5-21-1-7-2-5-4-19v-7l-2-5-2-14-2-5z" fill="#7B4D25" />
        //     <path transform="translate(391,1447)" d="m0 0 3 4 4 16 3 13 4 22 2 8v9l-4-2-2-3h-1l-10-46v-3h2l-2-6v-9z" fill="#784F25" />
        //     <path transform="translate(1365,1851)" d="m0 0 1 2-16 56-9 24-6 11-2-2-1-4 1-3 2-2 2-5 4-7 1-8 4-15 4-10 6-18 4-9 3-8z" fill="#785528" />
        //     <path transform="translate(904,962)" d="m0 0 2 3 1 3 1 16-1 202-1 21-2 2v-27l1-94v-117z" fill="#5C993D" />
        //     <path transform="translate(1109 2e3)" d="m0 0h10l10 1 10-1h9v1l-37 5-23 2-22 1h-32v-1l10-2 22-1h8l9-3 18-1z" fill="#755D2A" />
        //     <path transform="translate(857,2008)" d="m0 0h37l59 1h89v1l-8 1h-174l-4-2z" fill="#7C4E26" />
        //     <path transform="translate(904,1088)" d="m0 0h1v94l-1 28-8 8-2-3-1-9 5-5 2-1 1-3 1-18 1-65z" fill="#7B4F26" />
        //     <path transform="translate(365,1335)" d="m0 0 2 1 2 10 2 11 1 4 1 8 4 19 1 1 3 14 4 18 1 17-2 2-20-100z" fill="#684E21" />
        //     <path transform="translate(412,1543)" d="m0 0 1 4 3 8 2 10 3 9 4 18 4 16 3 14v7l-3-3-4-16-2-7-2-9-5-21-2-9v-6l-2-1-1-13z" fill="#7C4E26" />
        //     <path transform="translate(742,1334)" d="m0 0 1 2-6 12-5 11-3 10h-2v7l-2 6-1 10v13l-1 5-1 24 1 5-1 8h2l-1 12h-1l-2-12-1-13v-11l2-29 1-3 1-11 3-15 5-12 3-7 6-9z" fill="#5C993D" />
        //     <path transform="translate(733,1280)" d="m0 0 10 1v2l3 1-20 7-19 8h-2l2-6 2-3 6-3h3v-2z" fill="#785427" />
        //     <path transform="translate(1257,1405)" d="m0 0h16l9 3 2 1v2l3 1 1 3-26-5-36-1 4-2z" fill="#71672D" />
        //     <path transform="translate(552,682)" d="m0 0 4 4 12 17 10 11 7 8 18 18 11 9 3 3-1 2-13-11-12-11-13-13-9-11-11-14-6-9z" fill="#655323" />
        //     <path transform="translate(944,1302)" d="m0 0h3l2 2 5 3 2 4 5 2 5 5v4l-4 1-9-7-3-4-4-1-6-7z" fill="#7B4D25" />
        //     <path transform="translate(677,1822)" d="m0 0 3 2-14 12-9 10-6 9-2-4 4-9 10-10h2v-2l7-1 2-5z" fill="#785728" />
        //     <path transform="translate(444,1696)" d="m0 0h2l4 18 4 14 1 5 7 28v4h-2l-16-63z" fill="#675323" />
        //     <path transform="translate(507,1926)" d="m0 0 2 2 8 16 8 12 11 11 10 7 10 6 7 3v1l-7-1-12-7-14-11-9-10-8-13-6-12z" fill="#675523" />
        //     <path transform="translate(1299,1416)" d="m0 0h9l3 1 2 3h4v2l5 1 5 4 6 3 4 4h-4l-16-8-18-7z" fill="#755928" />
        //     <path transform="translate(1280,1984)" d="m0 0h7l-4 2-35 5-26 3h-7l3-3 57-6z" fill="#6D6F30" />
        //     <path transform="translate(724,1830)" d="m0 0h2v7l-3 10-1-2h-2v-2l-4-1-2-3h-7l4-3z" fill="#5C993D" />
        //     <path transform="translate(1297,890)" d="m0 0h11l-2 3-3 1-17 1-4 1h-21l2-2 20-2 2-1z" fill="#765A29" />
        //     <path transform="translate(365,1335)" d="m0 0 2 1 2 10 2 11 1 4 1 8 2 9v6l-2 1-9-45z" fill="#694E21" />
        //     <path transform="translate(352,1267)" d="m0 0 2 3 3 14 2 7-1 2h2v13l-2 4-6-34z" fill="#685123" />
        //     <path transform="translate(986,1338)" d="m0 0 15 8 17 8 20 8v2l-10-3-21-9-23-12z" fill="#655925" />
        //     <path transform="translate(341,874)" d="m0 0 2 1-1 4-6 3-3 1-1 2-1-1-4 8h-2l-2 2-4 1 1-4 7-8 10-7z" fill="#68481F" />
        //     <path transform="translate(411,1557)" d="m0 0 4 1v9l2 7 5 20v2l-3-1-4-15-4-16z" fill="#675323" />
        //     <path transform="translate(787,1795)" d="m0 0 2 1-3 3h-2v2l-8 5-4 6-5 3-7 9-6 8-3 7h-1v-6l8-10 7-9 12-12z" fill="#5D963C" />
        //     <path transform="translate(855,914)" d="m0 0 7 1 12 5 8 5-3 2h-2l-1 2-2-5-4 1-3-1v-3h-2v-2l-6-2z" fill="#755C2A" />
        //     <path transform="translate(1059,2007)" d="m0 0 13 1-1 2-5 1h-32v-1l10-2z" fill="#70672D" />
        //     <path transform="translate(435,1660)" d="m0 0 3 4 3 13 2 5 2 9-1 7-2-4-7-28z" fill="#685223" />
        //     <path transform="translate(1549,925)" d="m0 0 2 4v21l-4 25h-1v-11l1-6v-6l1-2 1-16-1-5z" fill="#775729" />
        //     <path transform="translate(896,1650)" d="m0 0 1 2-8 21-4 8-1-3 2-8h2l-1-3h2l-1-4 6-11z" fill="#73612B" />
        //     <path transform="translate(846,1759)" d="m0 0 2 1-11 8-12 7-17 9-2-1 10-6 18-10z" fill="#5C993D" />
        //     <path transform="translate(702,1334)" d="m0 0h4v10l-2 3-1-5-3-3-5 1-3 3-4-1 11-7z" fill="#5C993D" />
        //     <path transform="translate(1255,1523)" d="m0 0 3 4 5 5 10 1-1 4-4 2-4-1v-2l-4-2-4-5v-2l-2-1z" fill="#71662D" />
        //     <path transform="translate(881,1734)" d="m0 0 2 1-12 11-9 6-7 5-7 2 4-4 10-6 11-8z" fill="#5C993D" />
        //     <path transform="translate(644,1858)" d="m0 0h3l-2 4-7 15-3 9h-1l1-10 6-14z" fill="#73622C" />
        //     <path transform="translate(1238,1989)" d="m0 0h7v1h-6v2l-17 2h-7l3-3z" fill="#70692E" />
        //     <path transform="translate(507,1926)" d="m0 0 2 2 8 16 7 11-1 2-6-8-8-14-2-5z" fill="#695323" />
        //     <path transform="translate(692,1428)" d="m0 0h1l3 16 1 7-2 1-3-4v-8l-1-5z" fill="#73622C" />
        //     <path transform="translate(736,811)" d="m0 0 10 2 12 3 1 2-10-1-16-4z" fill="#645D26" />
        //     <path transform="translate(455,1740)" d="m0 0 2 2 5 19v4h-2l-5-19z" fill="#675725" />
        //     <path transform="translate(1186,1413)" d="m0 0 11 1-5 5-10-3z" fill="#5C973C" />
        //     <path transform="translate(341,874)" d="m0 0 2 1-1 4-6 3-3 1-1 2-1-3 4-5z" fill="#664A1F" />
        //     <path transform="translate(370,1365)" d="m0 0h2l3 13v6l-2 1-3-15z" fill="#695323" />
        //     <path transform="translate(1549,950)" d="m0 0h1l-1 13-2 12h-1v-11l1-6v-6z" fill="#72642C" />
        //     <path transform="translate(1321,1958)" d="m0 0 2 3-7 6-2-2 3-6z" fill="#725928" />
        //     <path transform="translate(365,1335)" d="m0 0 2 1 2 10-3 4-2-13z" fill="#675423" />
        //     <path transform="translate(762,1819)" d="m0 0v3l-7 8-4 9h-1v-6l8-10z" fill="#5C993D" />
        //     <path transform="translate(901,1626)" d="m0 0h1l-1 10-3 12h-1l1-12z" fill="#6C7130" />
        //     <path transform="translate(419,1595)" d="m0 0 4 4 2 9h-2l-1 3-3-13z" fill="#675825" />
        //     <path transform="translate(1230,1440)" d="m0 0h9l1 5h-5l-5-3z" fill="#5C963C" />
        //     <path transform="translate(417,1583)" d="m0 0h2l3 11v2l-3-1-2-6z" fill="#684C20" />
        //     <path transform="translate(397,1498)" d="m0 0h2l3 8v6l-2 2-3-13z" fill="#675925" />
        //     <path transform="translate(643,1342)" d="m0 0 3 1-7 10-2-1 1-4 3-5z" fill="#765B2A" />
        //     <path transform="translate(552,682)" d="m0 0 4 4 7 10-1 3-8-11-2-3z" fill="#645E27" />
        //     <path transform="translate(524,1956)" d="m0 0 7 6 5 5-1 2-10-9z" fill="#655724" />
        //     <path transform="translate(452,1728)" d="m0 0 3 1 1 11-2 2-2-8z" fill="#675223" />
        //     <path transform="translate(448,1713)" d="m0 0 2 1 3 14-2 2-3-12z" fill="#675825" />
        //     <path transform="translate(641,769)" d="m0 0 11 6 2 4-10-5-3-2z" fill="#665423" />
        //     <path transform="translate(359,1306)" d="m0 0h2l2 5-1 6-3-2z" fill="#67491F" />
        //     <path transform="translate(411,1557)" d="m0 0 4 1-1 9-2 1-1-4z" fill="#684E21" />
        //     <path transform="translate(644,1858)" d="m0 0h3l-5 10-2-1 1-5z" fill="#755D2A" />
        //     <path transform="translate(749,1839)" d="m0 0 1 4-5 12-1-4 3-9z" fill="#5C993D" />
        //     <path transform="translate(406,1520)" d="m0 0 2 1 2 6v5l-2-1v-2h-2z" fill="#7C4E26" />
        //     <path transform="translate(948,1311)" d="m0 0 4 2 4 5 4 3-1 2-11-10z" fill="#684F22" />
        // </svg>
        <svg version="1.1" viewBox="0 0 1096 1152" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
        <path transform="translate(0)" d="m0 0h1096v1152h-1096z" fill="#FEFDF2"/>
        <path transform="translate(390,346)" d="m0 0h9l39 5 65 5 35 2 16 2 8 4 6 7 2 5v80l-7 6-16 8-16 6-17 6-10 4-13 8-7 8-5 12v5h4l2-6 7-9 10-7h3l-1 7-3 13v9l4 17h5l-1-17 2-17 4-10 6-8 14-7 18-6 15-8h2v116l-3 14-4 10-7 9-11 8-14 8-20 11-12 8-10 9-6 10-1 10h6v-7l4-7 9-7 8-4h2l-1 8-1 5v8l6 1 1-12 4-11 8-9 13-8 16-10h2v-2l8-7 6-10 4-11 2-8 9 3 21 8 8 5 7 8 5 1-3-10-3-4v-2l-20-10-15-6-8-6v-77l4 1 15 8 24 9 29 10 13 7 10 8 8 11 2 4h4l-1-7-5-12-7-8v-2h18l13 3 4-1-5-5-13-5-4-1h-21l-6 2-31-11-18-6-14-6-11-7-5-4v-2l-3-1v-114l3-7 6-5 8-2 104-7 27-3 23-3h12l9 6 6 9 1 2v12l-6 39-8 48-7 39-7 35-9 41-8 33-14 53-6 21-7 14-9 8-10 3-49 6-11 1-37 1h-27l-39-1-54-6-13-2-10-6-7-10-5-14-6-23-13-50-12-52-10-48-11-59-8-48-3-22v-14l5-8 7-6z" fill="#6C421A"/>
        <path transform="translate(670,201)" d="m0 0h27l11 2 3 3 3 12 1 15-2 15-6 20-9 17-8 10-9 10-13 10-16 8-15 5-10 2h-27l-11-3-2-5-2-12v-18l3-18 4-11 8-16 10-14 7-7 15-11 14-7 15-5z" fill="#529835"/>
        <path transform="translate(452,201)" d="m0 0h28l15 3 19 8 14 9 10 9 9 10 8 13 5 11 4 11 3 17v19l-3 14-3 3-11 2h-26l-16-4-15-6-10-6-13-10-9-9-10-15-6-12-5-15-2-11v-25l3-12 7-3z" fill="#529835"/>
        <path transform="translate(576,76)" d="m0 0 7 4 14 12 10 12 8 14 6 14 4 16v28l-4 16-7 17-8 12-9 11-10 9-9 6-6-1-12-9-11-11-10-15-7-16-4-13-1-6v-27l3-15 6-15 6-11 10-13 11-11 9-6z" fill="#529835"/>
        <path transform="translate(662,773)" d="m0 0h19l12 4 10 9 5 10 3 14v89l-4 16-7 10-7 6-12 5h-18l-11-4-10-9-6-9-3-8-1-7v-88l2-12 7-14 8-7 9-4z" fill="#6D421A"/>
        <path transform="translate(759,773)" d="m0 0h20l11 4 6 4 7 8 4 11 2 15v79l-2 15-4 10-9 10-12 6-5 1h-15l-10-3-6-4-8-8-6-11-2-11v-89l2-12 7-13 8-7z" fill="#6D421A"/>
        <path transform="translate(437,772)" d="m0 0h9l5 4 5 15 7 37 4 21 3 16 2 6 10-50 9-44 5-4 10-1 5 2 3 3 1 3v149l-4 6-1 1h-13l-6-5-1-5v-13l1-27h-2v10l-6 34-3 5-2 1h-10l-5-3-3-4-4-31-2-13-1 6v36l-2 6-4 3h-11l-5-2-2-3v-153l5-5z" fill="#6D421A"/>
        <path transform="translate(544,772)" d="m0 0h36l14 3 8 4 7 8 5 13 2 10v20l-5 17-6 8 1 4 5 10 3 14v43l-3 7-3 3h-12l-4-2-3-7-1-46-3-7-4-4-3-1-17-1-1 57-3 9-3 2h-10l-5-3-3-3v-152l5-5z" fill="#6D421A"/>
        <path transform="translate(341,772)" d="m0 0h36l14 3 8 4 7 8 5 12 2 10v22l-2 9-6 12-3 3 1 4 4 7 4 12 1 42-1 9-5 6-2 1h-9l-5-2-3-4-1-44-2-9-2-4-7-4-16-1-1 1-1 60-4 6-3 1h-10l-4-2-3-5v-150l5-6z" fill="#6D421A"/>
        <path transform="translate(944,772)" d="m0 0h10l12 3 10 6 7 9 4 10 2 15v8l-3 7-4 2h-10l-5-2-2-3-2-19-4-7-6-3h-9l-6 4-3 6v13l6 10 7 7 14 11 10 8 9 11 6 12 2 10v9l-2 12-6 12-8 7-12 5-5 1h-13l-9-2-8-4-7-6-6-10-3-13-1-16 3-7 3-2h13l5 5 1 3 1 15 3 7 5 4 2 1h8l6-3 4-5 1-4v-7l-4-10-13-13-13-10-10-9-8-10-5-10-1-4v-23l3-10 6-10 9-6 10-4z" fill="#6D421A"/>
        <path transform="translate(276,772)" d="m0 0h7l5 3 4 8 8 36 13 58 10 42 1 11-4 5-2 1h-11l-5-2-4-11-5-21-2-10h-23l-3 9-5 24-4 8-4 3h-10l-5-2-3-3v-7l27-117 6-25 4-8z" fill="#6D421A"/>
        <path transform="translate(173,772)" d="m0 0h30l8 1 5 5v13l-4 5-3 1-37 1v43l28 1 5 3 2 5v8l-4 7-2 1-16 1-13-1-1 64-5 5-3 1h-8l-7-3-1-3v-151l3-5 2-1z" fill="#6D421A"/>
        <path transform="translate(833,772)" d="m0 0h68l5 4 2 6-1 9-2 4-4 2h-21v127l-2 7-6 5h-8l-7-3-1-2-1-68v-66h-19l-6-2-2-2-1-4v-8l3-7z" fill="#6D421A"/>
        <path transform="translate(714,970)" d="m0 0h12l10 3 8 6 6 10 3 10 1 12v11l-2 14-6 12-9 8-8 3-13 1-12-3-8-6-6-10-4-13v-23l3-13 6-11 9-8z" fill="#804A1A"/>
        <path transform="translate(667,797)" d="m0 0h9l7 4 3 6 1 6v79l-2 12-2 3h-2v2l-5 3h-9l-7-6-4-10v-85l5-10z" fill="#FEFDF2"/>
        <path transform="translate(765,797)" d="m0 0h8l6 3 4 5 1 3 1 13v24l-1 55-3 6-5 5-3 1h-7l-5-3-5-6-2-7v-84l3-8z" fill="#FEFDF2"/>
        <path transform="translate(541,995)" d="m0 0h16l9 3 7 6 4 8v11l-3 5-5 5-5 2-8 1h-11l-11-2-3-1 3 8 5 4 5 2h15l10-2 6 1 1 5-4 5-11 4h-19l-12-4-8-8-4-8-1-4v-16l4-11 7-8 8-5z" fill="#804A1A"/>
        <path transform="translate(789,969)" d="m0 0h9l13 4 7 6 4 8 1 4v10l-4 11-9 10-9 8-14 10-3 3-1 3 10 1h18l11-1 3 3-2 6-4 3-6 2h-28l-11-3-5-3-3-7 2-9 4-5 12-9 17-13 6-8 1-3v-9l-4-6-8-2-11 1-6 4-8 8-6-1-2-4 1-6 5-8 6-4 9-3z" fill="#804A1A"/>
        <path transform="translate(639,969)" d="m0 0h8l11 3 7 4 5 7 2 6v14l-4 10-7 8-9 8-15 11-4 3v2l10 2h16l12-1 4 2-1 6-5 4-7 2h-27l-11-3-5-3-3-5v-7l5-8 14-11 13-10 8-9 3-6-1-8-5-5-8-2-10 1-8 5-5 7h-5l-4-4 1-7 6-9 10-5z" fill="#804A1A"/>
        <path transform="translate(308,969)" d="m0 0h13l13 4 5 3 1 2-1 9-6-1-12-3h-14l-6 3-2 4v6l4 6 14 5 16 6 6 5 4 7 1 4v8l-6 12-5 5-4 3-9 3h-19l-13-4-5-5-1-2v-6l5-3 15 7h19l6-4 2-4v-8l-4-6-9-4-17-5-9-6-4-5-1-3v-15l4-8 7-6z" fill="#804A1A"/>
        <path transform="translate(715,983)" d="m0 0h11l7 4 5 8 2 9v20l-2 10-4 7-10 6h-9l-8-4-4-5-3-8-1-7v-14l2-11 5-9 6-5z" fill="#FEFDF2"/>
        <path transform="translate(415,993)" d="m0 0h11l8 4 5 8 3 8 2 20-1 19-4 7h-6l-3-3-2-38-3-8-5-4h-9l-10 5-1 8-1 32-2 7-2 1h-6l-3-12v-42l3-10 6-1 3 3v2l6-1 8-4z" fill="#804A1A"/>
        <path transform="translate(477,995)" d="m0 0h19l9 3 3 5-2 5-1 1h-7l-5-1h-14l-7 4-4 8v16l5 9 5 3h15l7-3 5-2 4 1 2 3-1 4-4 5-10 4h-20l-10-4-7-7-5-10-1-3v-14l3-9 4-7 7-7z" fill="#804A1A"/>
        <path transform="translate(358,797)" d="m0 0h19l5 2 5 6 2 7v12l-3 10-4 5-7 4-14 1-4-2v-44z" fill="#FEFDF2"/>
        <path transform="translate(560,797)" d="m0 0h20l5 2 4 5 3 10v9l-3 11-4 5-8 4-16 1-1-1z" fill="#FEFDF2"/>
        <path transform="translate(856,972)" d="m0 0h10l1 3 1 20v26l-1 37-1 1h-8l-2-5-1-65-13 6h-5l-3-4v-5l7-6 12-7z" fill="#6F431A"/>
        <path transform="translate(363,993)" d="m0 0 5 1 2 8v48l-2 9-1 1-7-1-2-9-1-27 1-18 2-9z" fill="#814B1A"/>
        <path transform="translate(543,1007)" d="m0 0h14l7 6v9l-5 3-8 1h-9l-10-2-1-1 1-8 8-7z" fill="#FEFDF2"/>
        <path transform="translate(706,972)" d="m0 0h5v2l-5 2-5 5-4 2-2 9h-2l-1 9 1 9 1 4 4-1 3 17 4 9 2 4-4-2-5-10-2-1-2-6-2-2v8l2 6-1 3 1 6h-2l-5-12-1-5v-23l3-13 6-11 9-8z" fill="#6F431A"/>
        <path transform="translate(856,972)" d="m0 0h10l1 3v12h-1l-1-4-1 5-9 1-13 6h-5l-3-4v-5l7-6 12-7z" fill="#804A1A"/>
        <path transform="translate(363,1016)" d="m0 0 3 1 3 14v6l-5 5 1 3-1 2 3 1 1-9h1v18l-2 3-7-1-1-12v-17l1-4z" fill="#6D421A"/>
        <path transform="translate(458,707)" d="m0 0h15l16 3 34 3 17 1h73l22-1 10-1h10v1l-27 3-37 1h-27l-39-1-54-6-13-2z" fill="#814B1A"/>
        <path transform="translate(387,1016)" d="m0 0h5l2 20 1 12 2 5v5l-2 1h-6l-2-6z" fill="#6D421A"/>
        <path transform="translate(437,772)" d="m0 0h9l5 4 1 6-2-3-3-4-9-1-5 3-1 2v11l-1 7v63l-1 71h-1v-153l5-5z" fill="#814B1A"/>
        <path transform="translate(278,833)" d="m0 0 2 2 4 16 2 15-1 1h-12l-1-3 4-17 1-11z" fill="#FEFDF2"/>
        <path transform="translate(735,988)" d="m0 0 5 3 4 8-1 9h2l1 5-1 15-1 5h-2l-2 4-3 5h-3l2-5 2-6 1-7v-20l-2-9-2-4z" fill="#6F431A"/>
        <path transform="translate(587,362)" d="m0 0 2 1-5 6-1 27-2 91h-1v-114l3-7z" fill="#804A1A"/>
        <path transform="translate(915,876)" d="m0 0h13l-3 2 2 3-1 4-1 2h2l-2 4-4-4-4-1-1 2h-3l-1 5v14h-1l-2-16 1-10z" fill="#804A1A"/>
        <path transform="translate(360,971)" d="m0 0h8l3 3 1 5-2 4-4 2h-5l-5-5v-5z" fill="#7F4A1A"/>
        <path transform="translate(568,470)" d="m0 0h2v116l-1 6h-1v-111h-4l-1-5 4-2-2-2z" fill="#814B1A"/>
        <path transform="translate(502,497)" d="m0 0h3l-1 7-3 13-1 7h-1l-1-10-5-1v-2l-3 1-2-3 4-5z" fill="#814B1A"/>
        <path transform="translate(589,507)" d="m0 0 6 2 25 10 27 9v1h-10l-4-3-9-1-4-3-9-1v-2l-11-2-2-3-7-2z" fill="#804A1A"/>
        <path transform="translate(942,928)" d="m0 0h2l2 5h2l1-3 9-2 2 2h-2l1 4 2 1-5 1h-13l-9-2 4-1 3 1z" fill="#814B1A"/>
        <path transform="translate(904,775)" d="m0 0 3 3 1 10-2 3-1-3-5 1-2-1-2-5v-3h6z" fill="#814B1A"/>
        <path transform="translate(676,531)" d="m0 0h18v1h-5v5l-3 8-4-5-6-7z" fill="#814B1A"/>
        <path transform="translate(509,658)" d="m0 0h2l-1 8-1 5-10-3v-2l-2-1 8-5z" fill="#814B1A"/>
        <path transform="translate(438,1049)" d="m0 0 1 2 3-1v5l-3 4h-6l-2-1v-6l1-2 6 1z" fill="#6F431A"/>
        <path transform="translate(608,499)" d="m0 0 12 3 6 3-2 2-8 1-8-3v-3z" fill="#7D491A"/>
        <path transform="translate(753,930)" d="m0 0 4 1h-2v2l15 1 1-2 3-1 4 2h7l-3 2-5 1h-15l-10-3z" fill="#814B1A"/>
        <path transform="translate(489,879)" d="m0 0h2l1 4v28h-1v-25h-2v10l-1 7h-1l1-22z" fill="#814B1A"/>
        <path transform="translate(964,808)" d="m0 0 2 4v9h3l4 6-1 3h-5l-2-3z" fill="#814B1A"/>
        <path transform="translate(739,977)" d="m0 0 4 1 5 7v5l-4-1-1-4-3-1-2-6z" fill="#6F431A"/>
        <path transform="translate(657,987)" d="m0 0 4 1 2 2v7l-2 6-3 2 1-12z" fill="#6F431A"/>
        <path transform="translate(659,974)" d="m0 0 5 1 6 8 1 6h-2v-3h-2l-1-4-4-2z" fill="#71441A"/>
        <path transform="translate(929,920)" d="m0 0 5 2 5 5-2 4-3 1-3-3-1-7z" fill="#7F4A1A"/>
        <path transform="translate(367,1036)" d="m0 0h3v14l-6-3-1-6 4-2z" fill="#814B1A"/>
        <path transform="translate(529,1021)" d="m0 0 1 3h5l-2 7-1 1-1 7-2-1 1-8-2-5z" fill="#6E431A"/>
        <path transform="translate(677,932)" d="m0 0 10 1-3 2-3 1h-18l-4-2h15z" fill="#814B1A"/>
        <path transform="translate(647,529)" d="m0 0 9 3 9 5v3l-1-2-7-1-2-1v-3l-8-1z" fill="#814B1A"/>
        <path transform="translate(524,489)" d="m0 0 2 1-8 8-4 8-2 9h-1l1-10 5-9 4-5z" fill="#7D491A"/>
        <path transform="translate(944,780)" d="m0 0 4 2 1 3-8 1-3-1-1 2v-3l4-3z" fill="#814B1A"/>
        <path transform="translate(333,1015)" d="m0 0 4 1 6 9v8l-2-2-4-12-2-1z" fill="#71441A"/>
        <path transform="translate(928,877)" d="m0 0 4 2 2 5v15h-1l-2-13-1-7h-2z" fill="#814B1A"/>
        <path transform="translate(812,975)" d="m0 0 4 2 5 7-1 4-1-4h-2l-5-5z" fill="#71441A"/>
        <path transform="translate(954,844)" d="m0 0 4 2 6 5-1 4-4-3v-2l-4-2z" fill="#7C491A"/>
        <path transform="translate(655 1e3)" d="m0 0 3 1-2 5h-3l-1 3h-2l1-4z" fill="#70441A"/>
        <path transform="translate(361,994)" d="m0 0h5v5l-4 2z" fill="#6E421A"/>
        <path transform="translate(856,972)" d="m0 0h10v3h-9z" fill="#73451A"/>
        <path transform="translate(453,878)" d="m0 0 2 1 1 5v7h-1l-1-6-1 6h-1v-12z" fill="#814B1A"/>
        <path transform="translate(651,519)" d="m0 0h10l1 3 2 1-2 1-11-4z" fill="#814B1A"/>
        <path transform="translate(714,970)" d="m0 0h12v2l-13 1z" fill="#75461A"/>
        </svg>
        
  )
}

export default Logo