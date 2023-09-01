# 1. 데이터 추가, 수정, 삭제

# 1. 추가 INSERT
# INSERT INTO 테이블(column1, column2, column3...)
# VALUES (VALUE1. VALUE2, VALUE3....)

# EMP 테이블에 새로운 직원 정보를 추가해보자
# INSERT INTO EMP(,,)
# VALUES(,,);

# 이런 식으로 생성하면 만들어짐 
# INSERT INTO  EMP( EMPNO, ENAME, JOB,SAL,DEPTNO)
# VALUES( 9999,'YANG','MANAGER', 5000,40 );
# 연결된 테이블 주의, 기본키 주의 

# 2. 수정 UPDATE
# UPDATE 테이블
# SET column1 = value1,
#     column2 = value2,
#     ....
# where 조건식;
# 어떤 row 수정할건지 명확하게 해주기 위해 조건식이 필요하다.

# UPDATE EMP
# SET JOB = 'CEP'
# WHERE EMPNO = 9999;

# 추가 수당 있는 직원들 급여 10%인상, SALESMAN -> SALESPSN
# UPDATE EMP
# SET SAL = SAL*1.1,
# JOB = 'SALESPNS'
# WHERE COMM IS NOT NULL;

# 3. 삭제 DELETE
# DELETE FROM 테이블
# WHERE  조건식;
# 예시 
# DELETE FROM EMP
# WHERE EMPNO = 9999;

# DELETE FROM EMP
# WHERE ENAME = 'YANG';

# - 트랜잭션(Transaction, Tx)
# 쪼갤 수 없는 업무 처리의 최소 단위
# 데이터 베이스에서 한 개 이상의 작업을 논리적으로 묶은 작업의 단위이다.
# 데이터 베이스의 일관성과 안정성을 보장하기 위해 사용된다.
# 일련의 작업들 모두 성공적으로 수행되거나, 모두 취소되어야 한다.

1. 원자성(Atomicity)

2. 일관성(Consistency)

3. 독립성(Isolation)

4. 지속성(Durability)