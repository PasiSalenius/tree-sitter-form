module.exports = grammar({
    name: 'form',
  
    extras: $ => [],
  
    rules: {
      source_file: $ => optional(seq($._key_value, repeat(seq('&', $._key_value)))),
  
      _key_value: $ =>
        seq($.key, optional(seq('=', $.value))),
  
      key: _ => /[^ =&]+/,
      value: _ => /[^ &]*/,
    }
  });
  