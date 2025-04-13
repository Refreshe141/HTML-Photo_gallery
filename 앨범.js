let currentPage = 1;
const imagesPerPage = 5; // 페이지 당 이미지 갯수

// 이미지 그룹의 페이지별 전환을 관리하는 함수
function updateImages(group) {
    const items = document.querySelectorAll(`#group${group} .item`);
    const totalItems = items.length;
    const start = (currentPage - 1) * imagesPerPage;
    const end = Math.min(start + imagesPerPage, totalItems);

    // 표시할 이미지들을 갱신
    items.forEach((item, index) => {
        if (index >= start && index < end) {
            item.classList.add('active'); // 'active' 클래스 추가
        } else {
            item.classList.remove('active'); // 'active' 클래스 제거
        }
    });

    // 버튼 상태 갱신 (다음/이전 버튼 활성화 여부)
    const prevButton = document.querySelector(`#group${group} .prev`);
    const nextButton = document.querySelector(`#group${group} .next`);

    if (currentPage === 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentPage * imagesPerPage >= totalItems) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// 이전 페이지로 가기
function prevPage(group) {
    if (currentPage > 1) {
        currentPage--;
        updateImages(group);
    }
}

// 다음 페이지로 가기
function nextPage(group) {
    currentPage++;
    updateImages(group);
}

// 이미지 확대
function openImage(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

// 확대된 이미지 닫기
function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// 초기화: 그룹1과 그룹2 이미지 업데이트
document.addEventListener("DOMContentLoaded", () => {
    updateImages(1);
    updateImages(2);

    // 화살표 버튼 클릭 이벤트 추가
    document.querySelector('.prev').addEventListener('click', () => prevPage(1));
    document.querySelector('.next').addEventListener('click', () => nextPage(1));
});
