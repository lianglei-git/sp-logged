

echo -e "cpu: \t`ps ax -o  %cpu | awk 'BEGIN{C=0}{C+=$1}END{print C}'`%"
echo -e "mem: \t`ps ax -o  %mem | awk 'BEGIN{C=0}{M+=$1}END{print M}'`%"