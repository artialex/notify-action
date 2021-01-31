# Notify Action

My custom action that uses Integromat notifications

```yaml
notify:
  if: always()
  needs: [ test ]
  name: Send notification
  runs-on: ubuntu-18.04
  steps:
    - uses: alextheartisan/notify-action@v1
      with:
        integromat_key: ${{ secrets.INTEGROMAT_KEY }}
        status: ${{ needs.test.result }}
```
