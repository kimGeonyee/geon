package party.model.vo;

import java.io.Serializable;
import java.sql.Date;

//(vo, dto, do, entity, bean) 반드시 직렬화
//모든 필드 private
//to String 오버라이딩
public class Party implements Serializable{

	private static final long serialVersionUID = -6359098139311809216L;
	private int partyId;//파티 아이디
	private int memberId;//파티장 아이디
	private int partyTime;//모임 시간
	private int priceAll;//총금액
	private int deposit;//거치금
	private int pricePeople;//1인당금액
	private String category;//분류
	
	private String partyTitle;//게시글 제목
	private String partyContent;//게시글 내용
	private Date dateRegist;//게시글 등록날짜
	private Date dateUpdate;//게시글 수정날짜
	private Date dateDelete;//게시글 삭제날짜
	
	private boolean enabled;//파티 활성화 여부
	private int countViews;//조회수
	private int countLike;//좋아요수
	private int countReply;//댓글수
	private String authority;//권한 설정
	private String location;//위치정보
	private int partyMemberCount;//파티원 인원수
	private int pictureId;//사진테이블 번호
	
	public Party() {
		
	}

	@Override
	public String toString() {
		return "Party [partyId=" + partyId + ", memberId=" + memberId + ", partyTime=" + partyTime + ", priceAll="
				+ priceAll + ", deposit=" + deposit + ", pricePeople=" + pricePeople + ", category=" + category
				+ ", partyTitle=" + partyTitle + ", partyContent=" + partyContent + ", dateRegist=" + dateRegist
				+ ", dateUpdate=" + dateUpdate + ", dateDelete=" + dateDelete + ", enabled=" + enabled + ", countViews="
				+ countViews + ", countLike=" + countLike + ", countReply=" + countReply + ", authority=" + authority
				+ ", location=" + location + ", partyMemberCount=" + partyMemberCount + ", pictureId=" + pictureId
				+ "]";
	}
	
}
