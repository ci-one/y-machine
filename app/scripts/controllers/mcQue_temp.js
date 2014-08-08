/**
 * Created by ci-one on 2014-08-05.
 */

//'use strict';

var mcQue_items = [
    {
        id: 0,
        title: '문의드립니다',
        writer: '나니',
        comp: '나니산업',
        contact: '070-8899-1100',
        email: 'nanie@nani.com',
        content: '본 페이지는 Angular.js 기반의\n 반응형 웹 시스템으로 만들어졌습니까?\n답변바랍니다.',
        date: '2014-07-29',
        images: 'question.jpg'
    },
    {
        id: 1,
        title: '답변해주세요',
        writer: '마당발',
        comp: '(주)씨알엘테크놀로지',
        contact: '010-2233-4455',
        email: 'ohdongjak@gmail.com',
        content: '제가 3개월 전에산 제품이 오동작을 일으킵니다\n전화드렸는데 받지 않으시네요\n010-2233-4455로 연락주시겠어요?',
        date: '2014-08-01',
        images: 'kakaotalk_008214.jpg/IMG4005.png'
    },
    {
        id: 2,
        title: '읽는대로 연락부탁드립니다',
        writer: '김첨지',
        comp: '운수좋은기업',
        contact: '010-1111-5876',
        email: 'orazle@goodluck.com',
        content: '하자 없는 중고제품이라고 해서 구매했는데\n전혀 동작하지 않습니다.\n어떻게 된일인가요?\n빠른 답변 부탁드립니다.',
        date: '2014-08-01',
        images: 'img_008942.jpg/img_008841.jpg'
    },
    {
        id: 3,
        title: '사용법 문의입니다',
        writer: '심봉사',
        comp: '인당테크',
        contact: '070-8005-0300',
        email: 'gongyangmi@naver.com',
        content: '안녕하십니까\n이전에 구매한 HC500제품의 사용 설명서가 없어서 문의드립니다.',
        date: '2014-08-02',
        images: 'HC500_receipt.jpg'
    },
    {
        id: 4,
        title: '멋진 홈페이지군요!',
        writer: '카페알루',
        comp: 'CAFE ALOU',
        contact: '070-0005-0100',
        email: 'hongbo@alou.com',
        content: '안녕하세요~ 카페 알루입니다~\n홈페이지 리뉴얼 하셨다고해서 찾아와 봤어요 ^ .^\n가산디지털단지역에서 아침마다 늘 직접만든 샌드위치를 팔고있으니 꼭 사먹어주세요!',
        date: '2014-08-02',
        images: 'americano.jpg/sandwich1.jpg'
    },
    {
        id: 5,
        title: '제품문의요',
        writer: '푸에르',
        comp: '도돌기업',
        contact: '010-0015-0110',
        email: 'dodol@lycos.co.kr',
        content: '안녕하세요\n중고제품 사고싶은데 추전좀 부탁드려요!',
        date: '2014-08-02',
        images: "IMG_819023.jpg"
    },
    {
        id: 6,
        title: '고생많으십니다',
        writer: 'SCV',
        comp: '(주)커멘드서플라이건설',
        contact: '010-1234-5679',
        email: 'showmethe@money.com',
        content: '안녕하세요 바쁘신중에 죄송합니다\n날씨가 많이덥지요?? 중고제품 문의드리려고합니다\n위의 번호로 연락 부탁드려요',
        date: '2014-08-03',
        images: "name_card.jpg"
    },
    {
        id: 7,
        title: '전에 사기로한 제품말인데요',
        writer: '차경철',
        comp: '세븐즈머신',
        contact: '010-1411-7779',
        email: 'sevenz@ng.co.kr',
        content: '얼마에 해주실수 있을까요?\n위의 번호로 연락 부탁드려요',
        date: '2014-08-03',
        images: ""
    },
    {
        id: 7,
        title: '급한일인데 전화 안받으셔서 글남깁니다.',
        writer: 'HongKong',
        comp: 'HK-Zeus',
        contact: '010-4115-0078',
        email: 'zeus@nada.info',
        content: '내일 당장 기계를 돌려야하는데 오동작을 하네요 ㅠㅠ\n위의 번호로 연락 주시겠어요?',
        date: '2014-08-04',
        images: "IMG_4012.jpg"
    },
    {
        id: 8,
        title: '전압 공급 관련 문제',
        writer: '서병국',
        comp: '티라노',
        contact: '010-9999-0071',
        email: 'tbyungk@gmail.com',
        content: '원래 살때 110V를 연결하게 되어있었는데요\n전압 변환 없이 220V에 연결하면 문제가 발생할까요?',
        date: '2014-08-04',
        images: "electricity.jpg"
    },
    {
        id: 9,
        title: '공작기계에 대하여',
        writer: '하정융',
        comp: '융단',
        contact: '010-1111-0100',
        email: 'yoongyoong@yahoo.com',
        content: '공작기계는 무엇이고 금융리스는 무엇이죠??',
        date: '2014-08-05',
        images: ""
    },
    {
        id: 10,
        title: '연동시 문제',
        writer: '최유미',
        comp: '금강도시건설',
        contact: '010-2288-6699',
        email: 'ym1004@hanmail.net',
        content: '저희 회사 제품과 연동시 문제가 발생합니다\n답변주세요\n저희회사 제품은 첨부파일과 같고\n제품 구매 영수증도 첨부하겠습니다.',
        date: '2014-08-05',
        images: "GumGang_Products_18192.jpg/receipt.jpg"
    }
];


function ctrlRead($scope) {

    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    $scope.items = mcQue_items;

    var getlist = function () {
            var searchMatch = function (haystack, needle) {
                if (!needle) {
                    return true;
                }
                return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
            };
            // init the filtered items
            $scope.search = function () {
                $scope.currentPage = 0;
                // now group by pages
                $scope.groupToPages();
            };
            // calculate page in place
            $scope.groupToPages = function () {
                $scope.pagedItems = [];

                for (var i = 0; i < $scope.items.length; i++) {
                    if (i % $scope.itemsPerPage === 0) {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.items[i] ];
                    } else {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
                    }
                }
            };
            $scope.range = function (start, end) {
                var ret = [];
                if (!end) {
                    end = start;
                    start = 0;
                }
                for (var i = start; i < end; i++) {
                    ret.push(i);
                }
                return ret;
            };
            $scope.prevPage = function () {
                if ($scope.currentPage > 0) {
                    $scope.currentPage--;
                }
            };
            $scope.nextPage = function () {
                if ($scope.currentPage < $scope.pagedItems.length - 1) {
                    $scope.currentPage++;
                }
            };
            $scope.setPage = function () {
                $scope.currentPage = this.n;
            };
            // functions have been describe process the data for display
            $scope.search();
        }
    getlist();

}

function ctrlDetail($scope, $routeParams){
    $scope.item = mcQue_items[$routeParams.id];
    $scope.item_image = $scope.item.images.split('/');
}