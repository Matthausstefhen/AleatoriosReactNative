#!/bin/sh
#
# An example hook script to check the commit log message.
# Called by "git commit" with one argument, the name of the file
# that has the commit message.  The hook should exit with non-zero
# status after issuing an appropriate message if it wants to stop the
# commit.  The hook is allowed to edit the commit message file.
#
# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg
# hook is more suited to it.
#
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}
                                                                                                                                      </View>

        <View style={styles.campos}>
          <Text style={styles.label}>Valor Máximo:</Text>
          <TextInput
            style={styles.textInput}
            value={valorMax}
            onChangeText={numero => setValorMax(numero)}
            keyboardType='number-pad'
          />
        </View>
      </View>

      <View style={styles.campoResultado}>
        <Button
          title='Gerar Número'
          onPress={() => gerarNumero()}
        />
        <Text style={styles.resultado}>O número gerado foi: {valorAleatorio}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  campos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    width: 100,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingLeft: 8,
  },
  campoResultado: {
    width: '60%',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
