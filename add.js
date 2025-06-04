document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTabId = button.getAttribute('data-tab');

      // Xóa lớp 'active' khỏi tất cả các nút tab và ô nội dung
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      // Thêm lớp 'active' vào nút tab được nhấp và ô nội dung tương ứng
      button.classList.add('active');
      document.getElementById(targetTabId).classList.add('active');
    });
  });
});