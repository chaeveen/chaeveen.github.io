<?php include_once('../inc/doctype.php'); ?>
<?php include_once('../inc/header.php'); ?>

<div class="sub_tit sub4">
    <div class="wFix">
        <h2 class="tit">DX사례</h2>
        <div class="location mt10">
            <span>· Home</span>
            <span>DX정보</span>
            <span>DX사례</span>
        </div>
    </div>
</div>

<nav class="sub_nav">
    <ul class="sub_lnb wFix">
        <li><a href="../contents/sub4-1.php">수요기업 정보</a></li>
        <li><a href="../contents/sub4-2.php">공급기업 정보</a></li>
        <li><a href="../contents/sub4-3.php" class="on">DX사례</a></li>
    </ul>
</nav>


<main class="sub">
    <div class="wFix">
        <section class="section">
            <div class="search_wrap search_st4">
                <input type="text" placeholder="검색어를 입력하세요" class="search-input">
                <button type="button" class="bg_sub03Color"><span class="material-icons">search</span>검색</button>
            </div>
            
            <div class="table_area mt30">
                <table class="table_st7">
                    <colgroup>
                        <col width="5%">
                        <col width="">
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>4</td>
                            <td>
                                <a href="view.php">
                                    <h3 class="tit">제조부문 AI 적용 사례</h3>
                                    <span class="txt">2024.02.22</span>
                                    <span class="txt">관리자</span>
                                    <span class="txt">160</span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <a href="view.php">
                                    <h3 class="tit">제조부문 AI 적용 사례</h3>
                                    <span class="txt">2024.02.22</span>
                                    <span class="txt">관리자</span>
                                    <span class="txt">160</span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <a href="view.php">
                                    <h3 class="tit">제조부문 AI 적용 사례</h3>
                                    <span class="txt">2024.02.22</span>
                                    <span class="txt">관리자</span>
                                    <span class="txt">160</span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <a href="view.php">
                                    <h3 class="tit">제조부문 AI 적용 사례</h3>
                                    <span class="txt">2024.02.22</span>
                                    <span class="txt">관리자</span>
                                    <span class="txt">160</span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="btn_right mt20">
                <a href="write.php" class="btn bg_navy font_white btn_l border_r_0">글쓰기</a>
            </div>
            <ul class="paging_wrap mt30 paging_st2">
                <li class="first"><button title="첫 페이지 이동" onclick=""><spn class="material-icons">first_page</spn></button></li>
                <li class="prev"><button title="이전 페이지 이동" onclick=""><span class="material-icons">keyboard_arrow_left</span></button></li>
                <li class="active"><button readonly="readonly" onclick="">1</button></li>
                <li><button readonly="readonly" onclick="">2</button></li>
                <li><button readonly="readonly" onclick="">3</button></li>
                <li class="next"><button title="다음 페이지 이동" onclick=""><span class="material-icons">keyboard_arrow_right</span></button></li>
                <li class="last"><button title="끝 페이지 이동" onclick=""><span class="material-icons">last_page</span></button></li>
            </ul><!-- \\paging_wrap -->
        </section>
    </div>
</main>

<?php include_once('../inc/footer.php'); ?>