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


<main class="sub">
    <div class="wFix">
        <section class="section">
            <p class="form_m txt-required">
				<img alt="필수입력" src="../images/common/req_input_icon.png"> 표시가 있는 항목은 필수입력사항입니다.
			</p>
            <div class="table_form">
                <div class="form-input-group hasDl">
                    <dl>
                        <dt>
                            <label for="user_nm">제목</label>
                            <span class="txt-required">
                                <span class="ml-1"><img alt="필수입력" src="../images/common/req_input_icon.png"></span>
                            </span>
                        </dt>
                        <dd>
                            <input type="text" id="title" name="title" maxlength="100" title="제목" value="" class="form-input w99 border_r_0" data-req="Y">
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <label for="user_nm">내용</label>
                            <span class="txt-required">
                                <span class="ml-1"><img alt="필수입력" src="../images/common/req_input_icon.png"></span>
                            </span>
                        </dt>
                        <dd>
                            <textarea id="context" name="context" title="제목" value="" class="form-input w99 border_r_0" data-req="Y" style="min-height:300px;"></textarea>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <label for="user_nm">첨부파일</label>
                        </dt>
                        <dd>
                            <div class="filebox">
                                <input class="upload-name border_r_0" value="첨부파일" placeholder="첨부파일" readonly>
                                <label for="file" class="btn">파일찾기</label> 
                                <input type="file" id="file">
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="btn_wrap mt30">
                <button class="btn bg_gray btn_l font_white" onclick="history.back()">취소</button>
                <button class="btn bg_navy btn_l font_white" onclick="history.back()">저장</button>
            </div>
        </section>
    </div>
</main>

<?php include_once('../inc/footer.php'); ?>